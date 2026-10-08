import Link from 'next/link';
export async function getServerSideProps({req}){const base=process.env.NEXT_PUBLIC_SITE_URL||`http://${req.headers.host}`;const r=await fetch(`${base}/api/vendors`);return {props:{vendors:await r.json()}}}
export default function Software({vendors}){return <><h1>Payroll Software</h1><div className="grid">{vendors.map(v=><div className="card" key={v._id}><h2>{v.name}</h2><p>{v.description}</p><div className="price">{v.plans?.[0]?.priceText||'Pricing unavailable'}</div><Link href={`/software/${v.slug}`}>View details →</Link></div>)}</div></>}
