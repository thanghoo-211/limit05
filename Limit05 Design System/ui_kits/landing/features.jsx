const { Card, Chip, Button } = window.Limit05DesignSystem_2b3c93;

const FEATURES = [
  { icon:'layout-grid', title:'Mỗi món đồ, một ô cố định riêng', body:'Sáu ngăn phân vùng cho sạc, cáp, tai nghe, ví, chìa khoá và điện thoại. Rút ra dùng ngay, không phải lục tung túi.' },
  { icon:'droplets', title:'Ripstop chống thấm nước nhẹ', body:'Vải 210D dệt gia cường ô vuông, phủ PU mặt trong. Mưa rào bất chợt trên đường không làm ướt thiết bị.' },
  { icon:'shield', title:'Ngăn đệm cho thiết bị', body:'Khoang chính lót mút 4mm, đủ cho tablet 11 inch. Không trầy xước khi đặt cạnh chìa khoá.' },
  { icon:'feather', title:'420g, đeo cả ngày', body:'Dây đeo dệt 38mm với đệm vai tháo rời. Trọng lượng dồn về hông, không kéo vai khi đi xe máy.' }
];

function Features() {
  return (
    <section id="tinh-nang" style={{maxWidth:'var(--container-max)',margin:'var(--sp-xl) auto 0',padding:'0 var(--sp-lg)'}}>
      <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--size-h2)',lineHeight:'var(--lh-h2)',fontWeight:'var(--weight-bold)',color:'var(--text-heading)',margin:'0 0 var(--sp-lg)',maxWidth:'22ch'}}>
        Bốn quyết định kỹ thuật, không phải bốn tính năng
      </h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:'var(--sp-md)'}}>
        {FEATURES.map(f => (
          <Card key={f.title} bordered={false}>
            <span style={{display:'grid',placeItems:'center',width:'44px',height:'44px',borderRadius:'var(--radius-sm)',background:'var(--surface-tint)',color:'var(--action-primary)',marginBottom:'var(--sp-md)'}}>
              <i data-lucide={f.icon} style={{width:22,height:22}}></i>
            </span>
            <strong style={{display:'block',fontFamily:'var(--font-display)',fontSize:'var(--size-h3)',lineHeight:'var(--lh-h3)',fontWeight:'var(--weight-semibold)',color:'var(--action-primary)',marginBottom:'var(--sp-sm)'}}>{f.title}</strong>
            <span style={{color:'var(--text-muted)'}}>{f.body}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Material() {
  return (
    <section id="chat-lieu" style={{maxWidth:'var(--container-max)',margin:'var(--sp-xl) auto 0',padding:'0 var(--sp-lg)'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1.05fr',gap:'var(--sp-xl)',alignItems:'center'}}>
        <div style={{borderRadius:'var(--radius-md)',overflow:'hidden',boxShadow:'var(--shadow-card)'}}>
          <img src="../../assets/product-2.png" alt="Chi tiết vải ripstop" style={{width:'100%',display:'block'}} />
        </div>
        <div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--size-h2)',lineHeight:'var(--lh-h2)',fontWeight:'var(--weight-bold)',color:'var(--text-heading)',margin:'0 0 var(--sp-md)'}}>
            Giống một chiếc khay chia đồ thu nhỏ
          </h2>
          <p style={{fontSize:'var(--size-body)',lineHeight:'var(--lh-body)',color:'var(--text-body)',margin:'0 0 var(--sp-md)',maxWidth:'52ch'}}>
            Thay vì ném tất cả chìa khoá, sạc cáp và ví tiền lộn xộn vào một chiếc hộp lớn, mỗi món đồ đều có sẵn một ô cố định riêng biệt để bạn rút ra dùng ngay lập tức.
          </p>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:'var(--sp-sm)'}}>
            {['Khoá kéo YKK chống nước','Móc treo chìa khoá cố định','Ngăn sau chống trộm RFID','Đáy gia cường 500D'].map(t => (
              <li key={t} style={{display:'flex',gap:'var(--sp-sm)',alignItems:'center',color:'var(--text-body)'}}>
                <i data-lucide="check" style={{width:18,height:18,color:'var(--action-primary)'}}></i>{t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Specs() {
  const rows = [['Chất liệu','Ripstop 210D phủ PU, đáy 500D'],['Kích thước','28 × 16 × 9 cm'],['Trọng lượng','420 g'],['Số ngăn','6 (1 chính, 3 phụ, 1 RFID, 1 chìa khoá)'],['Dây đeo','Dệt 38mm, điều chỉnh 70–130 cm'],['Bảo hành','24 tháng']];
  return (
    <section id="thong-so" style={{maxWidth:'var(--container-max)',margin:'var(--sp-xl) auto 0',padding:'0 var(--sp-lg)'}}>
      <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--size-h2)',lineHeight:'var(--lh-h2)',fontWeight:'var(--weight-bold)',color:'var(--text-heading)',margin:'0 0 var(--sp-lg)'}}>Thông số</h2>
      <Card padding="0">
        {rows.map((r,i) => (
          <div key={r[0]} style={{display:'grid',gridTemplateColumns:'220px 1fr',gap:'var(--sp-md)',padding:'var(--sp-md) var(--sp-lg)',borderTop:i ? '1px solid var(--divider)' : 'none'}}>
            <span style={{color:'var(--text-muted)',fontSize:'var(--size-caption)',fontWeight:'var(--weight-medium)'}}>{r[0]}</span>
            <span style={{color:'var(--text-body)'}}>{r[1]}</span>
          </div>
        ))}
      </Card>
    </section>
  );
}

Object.assign(window, { Features, Material, Specs });
