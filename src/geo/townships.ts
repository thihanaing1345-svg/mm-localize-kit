export interface MyanmarTownship {
  id: string;
  townshipEn: string;
  townshipMm: string;
  districtEn: string;
  districtMm: string;
  regionEn: string;
  regionMm: string;
}

export const MYANMAR_TOWNSHIPS: MyanmarTownship[] = [
  { id: 'yangon-yangon-west-sanchaung', townshipEn: 'Sanchaung', townshipMm: 'စမ်းချောင်း', districtEn: 'Yangon West', districtMm: 'ရန်ကုန်အနောက်ပိုင်း', regionEn: 'Yangon Region', regionMm: 'ရန်ကုန်တိုင်းဒေသကြီး' },
  { id: 'yangon-yangon-west-kamaryut', townshipEn: 'Kamaryut', townshipMm: 'ကမာရွတ်', districtEn: 'Yangon West', districtMm: 'ရန်ကုန်အနောက်ပိုင်း', regionEn: 'Yangon Region', regionMm: 'ရန်ကုန်တိုင်းဒေသကြီး' },
  { id: 'mandalay-chanayethazan', townshipEn: 'Chanayethazan', townshipMm: 'ချမ်းအေးသာစံ', districtEn: 'Mandalay', districtMm: 'မန္တလေး', regionEn: 'Mandalay Region', regionMm: 'မန္တလေးတိုင်းဒေသကြီး' },
  { id: 'naypyitaw-zabuthiri', townshipEn: 'Zabuthiri', townshipMm: 'ဇမ္ဗူသီရိ', districtEn: 'Naypyitaw', districtMm: 'နေပြည်တော်', regionEn: 'Naypyitaw Union Territory', regionMm: 'နေပြည်တော် ပြည်ထောင်စုနယ်မြေ' },
  { id: 'ayeyarwady-pathein', townshipEn: 'Pathein', townshipMm: 'ပုသိမ်', districtEn: 'Pathein', districtMm: 'ပုသိမ်', regionEn: 'Ayeyarwady Region', regionMm: 'ဧရာဝတီတိုင်းဒေသကြီး' }
];

export function getTownshipsByRegion(region: string): MyanmarTownship[] {
  const query = region.toLocaleLowerCase();
  return MYANMAR_TOWNSHIPS.filter(item => item.regionEn.toLocaleLowerCase().includes(query) || item.regionMm.includes(region));
}

export function findTownship(query: string): MyanmarTownship | undefined {
  const normalized = query.toLocaleLowerCase().trim();
  return MYANMAR_TOWNSHIPS.find(item =>
    item.townshipEn.toLocaleLowerCase() === normalized ||
    item.townshipMm === query.trim() ||
    item.id === normalized
  );
}
