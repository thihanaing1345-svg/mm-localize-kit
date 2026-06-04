# API Reference

The package exposes a root module and focused subpath modules. Root imports are convenient for applications, while subpath imports are clearer for libraries and examples.

## Text

| Function | Description |
| --- | --- |
| `hasMyanmarText(value)` | Returns whether the string contains Myanmar script characters. |
| `normalizeUnicode(value)` | Normalizes Unicode composition and collapses whitespace. |
| `detectMyanmarEncoding(value)` | Returns a heuristic encoding classification with confidence and reasons. |

## Phone

| Function | Description |
| --- | --- |
| `normalizeMyanmarPhoneNumber(value)` | Converts Myanmar numerals and common international prefixes to local format. |
| `isValidMyanmarPhoneNumber(value)` | Returns whether the normalized value resembles a Myanmar mobile number. |
| `parseMyanmarPhoneNumber(value)` | Returns normalized number, country code, validity, and operator hint. |
| `getMyanmarPhoneOperator(value)` | Returns a best-effort operator label from common prefixes. |

## Currency, numerals, and date

| Function | Description |
| --- | --- |
| `formatMMK(amount, options)` | Formats Myanmar Kyat values with configurable symbol and numeral style. |
| `toMyanmarNumerals(value)` | Converts ASCII digits to Myanmar numerals. |
| `toArabicNumerals(value)` | Converts Myanmar numerals to ASCII digits. |
| `containsMyanmarNumerals(value)` | Detects Myanmar numeral characters. |
| `formatMyanmarDate(value, options)` | Formats dates for Myanmar-facing interfaces. |

## Geo and search

| Function | Description |
| --- | --- |
| `MYANMAR_TOWNSHIPS` | Starter township dataset. |
| `getTownshipsByRegion(region)` | Returns townships matching an English region name. |
| `findTownship(query)` | Finds a township by English name, Myanmar name, or ID. |
| `normalizeMyanmarSearchText(value)` | Normalizes mixed Myanmar/English text for application search. |

## Form helpers

| Function | Description |
| --- | --- |
| `validateMyanmarPhone(value)` | Returns a validation result for phone form fields. |
| `requireMyanmarText(value)` | Requires at least one Myanmar script character. |
| `validateUnicodeText(value)` | Flags clearly suspicious legacy/mixed encoding results. |
