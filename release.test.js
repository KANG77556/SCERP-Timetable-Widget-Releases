const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');

test('update manifest points to v1.2.13 portable release',()=>{
  const m=JSON.parse(fs.readFileSync('update-manifest.json','utf8'));
  assert.equal(m.version,'1.2.13');
  assert.equal(m.url,'https://github.com/KANG77556/SCERP-Timetable-Widget-Releases/releases/download/v1.2.13/SCERP-Timetable-Widget-1.2.13.exe');
  assert.equal(m.sha256,'8b551e807c2d567b793b7208310fccbc08a5a118e110dd7155d7c3efc0895a90');
  assert.equal(m.size,287571070);
});
