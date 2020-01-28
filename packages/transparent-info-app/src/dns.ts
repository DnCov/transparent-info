import 'unfetch';

export enum DnsType {
  A = 1,
  NS = 2,
  MD = 3,
  MF = 4,
  CNAME = 5,
  SOA = 6,
  MB = 7,
  MG = 8,
  MR = 9,
  NULL = 10,
  WKS = 11,
  PTR = 12,
  HINFO = 13,
  MINFO = 14,
  MX = 15,
  TXT = 16,
  RP = 17,
  AFSDB = 18,
  AAAA = 28,
  SRV = 33,
  SSHFP = 44,
  RRSIG = 46,
  AXFR = 252,
  ANY = 255,
  URI = 256,
  CAA = 257,
}

// const url = 'https://www.dns-js.com/api.aspx';
const url = '//www.dns-js.com/api.aspx';
export interface Query {
  Action: 'Query';
  Domain: string;
  Type: DnsType;
}

export async function query(domain: string, type: DnsType) {
  const body: Query = {
    Action: 'Query',
    Domain: domain,
    Type: type,
  };
  const rst = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (rst.status >= 400) {
    throw new Error(`query error: ${rst.statusText}`);
  }
  return await rst.json();
}

interface TxtRecord {
  Text: string[];
}
export async function queryTxt(domain: string): Promise<TxtRecord[]> {
  return await query(domain, DnsType.TXT);
}

export async function queryCid(domain: string) {
  const __data = [
    {
      EscapedText: ['dnslink=/ipfs/QmZSFH4oQqJhynkYaq88vYmpGRkpHCunPRC1KedynLECAp'],
      Text: ['dnslink=/ipfs/QmZSFH4oQqJhynkYaq88vYmpGRkpHCunPRC1KedynLECAp'],
      DomainName: {
        Original: 'latest.dncov.fox.mn.',
        Value: 'latest.dncov.fox.mn.',
        Labels: ['.', 'mn.', 'fox.', 'dncov.', 'latest.'],
      },
      RecordType: 16,
      RecordClass: 1,
      TimeToLive: 594,
      InitialTimeToLive: 594,
      RawDataLength: 61,
    },
  ];

  const res = await queryTxt(domain);
  if (res.length) {
    const txt = res[0].Text[0];
    if (txt) {
      const groups = txt.split('=');
      if (groups.length > 1) {
        return groups[1];
      }
    }
  }

  throw new Error('no result');
}
