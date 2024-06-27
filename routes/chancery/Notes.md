## Equity Texts
/chancery/texts/equity/:id

SELECT * FROM equity_texts WHERE objid = :id

## Equity Texts Level 1
/chancery/texts/equity/book/:id

SELECT * FROM equity_texts_tocs_lv1 WHERE equity_txt_id = :id



path: '/chancery/texts/equity/level4/:id',
sql = `SELECT * FROM equity_texts_tocs_lv4 WHERE equity_txt_lv3_id = ${req.params.id}`;

path: '/chancery/texts/equity/level5/:id',
sql = `SELECT * FROM equity_texts_tocs_lv5 WHERE equity_txt_lv4_id = ${req.params.id}`;

path: '/chancery/texts/equity/level6/:id',
sql = `SELECT * FROM equity_texts_tocs_lv6 WHERE equity_txt_lv5_id = ${req.params.id}`;

path: '/chancery/texts/equity/level7/:id',
sql = `SELECT * FROM equity_texts_tocs_lv7 WHERE equity_txt_lv6_id = ${req.params.id}`;

path: '/chancery/texts/equity/level8/:id',
sql = `SELECT * FROM equity_texts_tocs_lv8 WHERE equity_txt_lv7_id = ${req.params.id}`;

path: '/chancery/texts/equity/level9/:id',
sql = `SELECT * FROM equity_texts_tocs_lv9 WHERE equity_txt_lv8_id = ${req.params.id}`;

path: '/chancery/texts/equity/level10/:id',
sql = `SELECT * FROM equity_texts_tocs_lv10 WHERE equity_txt_lv9_id = ${req.params.id}`;

path: '/chancery/texts/equity/level11/:id',
sql = `SELECT * FROM equity_texts_tocs_lv11 WHERE equity_txt_lv10_id = ${req.params.id}`;

path: '/chancery/texts/equity/level12/:id',
sql = `SELECT * FROM equity_texts_tocs_lv12 WHERE equity_txt_lv11_id = ${req.params.id}`;

path: '/chancery/texts/equity/level13/:id',
sql = `SELECT * FROM equity_texts_tocs_lv13 WHERE equity_txt_lv12_id = ${req.params.id}`;






















