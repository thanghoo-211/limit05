const { BrandMark, Button, Badge } = window.Limit05DesignSystem_2b3c93;

function Announcement({ onClose }) {
  return (
    <div style={{background:'var(--surface-tint)',color:'var(--text-heading)',fontSize:'14px',fontWeight:500,textAlign:'center',padding:'10px var(--sp-md)',position:'relative'}}>
      Miễn phí giao hàng toàn quốc cho đơn từ 500.000₫ — nhận hàng trong 2 ngày
      <button onClick={onClose} aria-label="Đóng" style={{position:'absolute',right:'16px',top:'50%',transform:'translateY(-50%)',background:'none',border:0,cursor:'pointer',color:'var(--text-muted)',display:'flex'}}>
        <i data-lucide="x" style={{width:16,height:16}}></i>
      </button>
    </div>
  );
}

function Header({ cartCount, onCart, onBuy }) {
  const link = {fontFamily:'var(--font-body)',fontSize:'15px',fontWeight:500,color:'var(--text-body)',textDecoration:'none'};
  return (
    <header style={{position:'sticky',top:0,zIndex:20,background:'rgba(244,248,250,.88)',backdropFilter:'blur(12px)',borderBottom:'1px solid var(--ink-a08)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--sp-md) var(--sp-lg)',display:'flex',alignItems:'center',gap:'var(--sp-lg)'}}>
        <BrandMark size={34} assetBase="../../assets/" />
        <nav style={{display:'flex',gap:'var(--sp-lg)',marginLeft:'var(--sp-md)'}}>
          <a href="#tinh-nang" style={link}>Tính năng</a>
          <a href="#chat-lieu" style={link}>Chất liệu</a>
          <a href="#thong-so" style={link}>Thông số</a>
        </nav>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'var(--sp-md)'}}>
          <button onClick={onCart} aria-label="Giỏ hàng" style={{position:'relative',background:'none',border:0,cursor:'pointer',color:'var(--text-heading)',display:'flex',padding:'6px'}}>
            <i data-lucide="shopping-bag" style={{width:22,height:22}}></i>
            {cartCount > 0 && (
              <span style={{position:'absolute',top:0,right:0,background:'var(--action-accent)',color:'#fff',fontSize:'11px',fontWeight:700,minWidth:'18px',height:'18px',borderRadius:'var(--radius-pill)',display:'grid',placeItems:'center',padding:'0 4px'}}>{cartCount}</span>
            )}
          </button>
          <Button size="sm" onClick={onBuy}>Mua ngay</Button>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Announcement, Header });
