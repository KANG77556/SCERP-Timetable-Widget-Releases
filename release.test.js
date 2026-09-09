const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');

test('update manifest points to v1.2.12 portable release',()=>{
  const m=JSON.parse(fs.readFileSync('update-manifest.json','utf8'));
  assert.equal(m.version,'1.2.12');
  assert.equal(m.url,'https://github.com/KANG77556/SCERP-Timetable-Widget-Releases/releases/download/v1.2.12/SCERP-Timetable-Widget-1.2.12.exe');
  assert.equal(m.sha256,'1e65345ec337b4443a73833fba45a331c0e9276a87b2e8f94c92ff6d08528933');
  assert.equal(m.size,287569022);
});
