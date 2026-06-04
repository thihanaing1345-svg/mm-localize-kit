# CLI Example

After installing the package, clean a small Myanmar text dataset with:

```bash
mm-localize clean ./raw.txt ./clean.txt
mm-localize detect "မင်္ဂလာပါ"
mm-localize phone "+၉၅၉၇၈၄၁၂၃၄၅၆"
```

The `clean` command normalizes Unicode composition, whitespace, Myanmar digits, and search punctuation for dataset preparation.
