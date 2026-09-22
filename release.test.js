const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');

test('Windows update manifest points to a valid public release asset',()=>{
  const m=JSON.parse(fs.readFileSync('update-manifest.json','utf8'));
  assert.match(String(m.version||''),/^\d+\.\d+\.\d+$/);
  assert.equal(
    m.url,
    `https://github.com/KANG77556/SCERP-Timetable-Widget-Releases/releases/download/v${m.version}/SCERP-Timetable-Widget-${m.version}.exe`
  );
  assert.match(String(m.sha256||''),/^[a-f0-9]{64}$/i);
  assert.ok(Number.isFinite(Number(m.size))&&Number(m.size)>0);
});
