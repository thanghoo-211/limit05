const { Button, Badge, Chip } = window.Limit05DesignSystem_2b3c93;

function Hero({ onBuy, onAdd }) {
  return (
    <section style={{background:'var(--surface-tint)',borderRadius:'var(--radius-lg)',margin:'var(--sp-lg) auto 0',maxWidth:'var(--container-max)',padding:'var(--sp-xl) var(--sp-lg)'}}>
      <div style={{display:'grid',gridTemplateColumns:'1.05fr 1fr',gap:'var(--sp-xl)',alignItems:'center'}}>
        <div>
          <Badge>Sale -20% · còn 12 suất</Badge>
          <h1 style={{fontFamily:'var(--font-display)',fontSize:'var(--size-h1-fluid)',lineHeight:'var(--lh-h1)',letterSpacing:'var(--ls-h1)',fontWeight:'var(--weight-xbold)',color:'var(--text-heading)',margin:'var(--sp-md) 0 var(--sp-sm)'}}>
            Không phải<br/>giới hạn
          </h1>
          <p style={{fontSize:'19px',lineHeight:1.5,color:'var(--text-muted)',margin:'0 0 var(--sp-lg)',maxWidth:'46ch'}}>
            Túi sling kỹ thuật ripstop chống thấm, hệ thống đa ngăn khoa học. Mỗi món đồ một ô cố định riêng.
          </p>
          <div style={{display:'flex',gap:'var(--sp-sm)',flexWrap:'wrap',marginBottom:'var(--sp-lg)'}}>
            <Chip>Chống nước</Chip><Chip>Đa ngăn</Chip><Chip>Ripstop 210D</Chip><Chip>420g</Chip>
          </div>
          <div style={{display:'flex',alignItems:'baseline',gap:'var(--sp-md)',marginBottom:'var(--sp-md)'}}>
            <span style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-xbold)',fontSize:'34px',color:'var(--text-heading)'}}>590.000₫</span>
            <span style={{fontSize:'18px',color:'var(--text-muted)',textDecoration:'line-through'}}>740.000₫</span>
          </div>
          <div style={{display:'flex',gap:'var(--sp-sm)',flexWrap:'wrap'}}>
            <Button size="lg" onClick={onBuy}>Mua ngay</Button>
            <Button size="lg" variant="ghost" onClick={onAdd}>Thêm giỏ hàng</Button>
          </div>
        </div>
        <div style={{borderRadius:'var(--radius-md)',overflow:'hidden',boxShadow:'var(--shadow-raised)',background:'var(--surface-card)'}}>
          <img src="../../assets/product-1.png" alt="Túi sling Limit05" style={{width:'100%',display:'block'}} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
