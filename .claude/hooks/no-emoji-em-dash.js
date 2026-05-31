#!/usr/bin/env node
/* Project rule enforcement: block Write/Edit content that contains emojis or
   em/en dashes. Regular hyphen-minus "-" is allowed (code identifiers, CSS, URLs). */
let data = '';
process.stdin.on('data', c => (data += c));
process.stdin.on('end', () => {
  let j = {};
  try { j = JSON.parse(data); } catch (e) { process.exit(0); }
  const ti = j.tool_input || {};
  const text = [ti.content, ti.new_string].filter(x => typeof x === 'string').join('\n');
  if (!text) process.exit(0);
  const dash = /[‒–—―−]/;   // figure, en, em, horizontal-bar, minus
  const emoji = /\p{Extended_Pictographic}/u;
  const bad = [];
  if (emoji.test(text)) bad.push('emojis');
  if (dash.test(text)) bad.push('em/en dashes');
  if (bad.length) {
    process.stdout.write(JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'deny',
        permissionDecisionReason: 'Project rule: never use ' + bad.join(' or ') +
          '. Rewrite without them (use commas, periods, parentheses; the word "to" for ranges; a plain hyphen only inside code identifiers).'
      }
    }));
  }
  process.exit(0);
});
