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

export async function query(domain?: string, type?: DnsType) {
  if (!domain) {
    domain = '_dnslink.dncov.fox.mn';
  }
  if (!type) {
    type = DnsType.TXT;
  }

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
