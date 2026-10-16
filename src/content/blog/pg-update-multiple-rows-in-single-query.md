---
title: "Postgres update multiple rows based on multiple conditions in single query"
description: "How to update multiple rows based on multiple conditions using a single Postgres query."
pubDate: 2022-08-01
tags: ["Postgres", "SQL", "Tips", "Tricks"]
---
When you need to update multiple rows based on multiple conditions, ever wonder if that can be done in a single query?

Here is a solution:
```sql
update account 
set currency = nv.currency
from
    ( values
        (12, 'EURO'),
        (18, 'DOLLAR'),
        (13, 'Pound')
    ) as nv (id, currency)
where account.id = nv.id ;
```
Credit goes to [this dba.stackexchange.com answer](https://dba.stackexchange.com/a/246759/81095).
