const { Button, Card, Field, Badge, BrandMark } = window.Limit05DesignSystem_2b3c93;

function CartDrawer({ open, count, onClose, onCheckout, onQty }) {
  const unit = 590000;
  return (
    <>
      <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(25,36,32,.35)',backdropFilter:'blur(2px)',opacity:open?1:0,pointerEvents:open?'auto':'none',transition:'opacity var(--dur-fast) var(--ease-out)',zIndex:40}} />
      <aside style={{position:'fixed',top:0,right:0,bottom:0,width:'400px',maxWidth:'92vw',background:'var(--surface-card)',boxShadow:'var(--shadow-raised)',zIndex:41,transform:open?'translateX(0)':'translateX(100%)',transition:'transform var(--dur-fast) var(--ease-out)',display:'flex',flexDirection:'column',fontFamily:'var(--font-body)'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'var(--sp-lg)',borderBottom:'1px solid var(--divider)'}}>
          <strong style={{fontFamily:'var(--font-display)',fontSize:'var(--size-h3)',fontWeight:'var(--weight-semibold)',color:'var(--text-heading)'}}>Giỏ hàng</strong>
          <button onClick={onClose} aria-label="Đóng" style={{background:'none',border:0,cursor:'pointer',color:'var(--text-muted)',display:'flex'}}><i data-lucide="x" style={{width:20,height:20}}></i></button>
        </div>
        <div style={{flex:1,overflow:'auto',padding:'var(--sp-lg)'}}>
          {count === 0 ? (
            <p style={{color:'var(--text-muted)',margin:0}}>Chưa có sản phẩm nào.</p>
          ) : (
            <div style={{display:'flex',gap:'var(--sp-md)'}}>
              <img src="../../assets/product-2.png" alt="" style={{width:'88px',height:'88px',objectFit:'cover',borderRadius:'var(--radius-sm)'}} />
              <div style={{flex:1}}>
                <strong style={{display:'block',color:'var(--text-heading)',fontWeight:'var(--weight-semibold)'}}>Sling Limit05 · Sage Grey</strong>
                <span style={{display:'block',color:'var(--text-muted)',fontSize:'var(--size-caption)',margin:'2px 0 var(--sp-sm)'}}>Ripstop 210D · 420g</span>
                <div style={{display:'flex',alignItems:'center',gap:'var(--sp-md)'}}>
                  <div style={{display:'flex',alignItems:'center',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-sm)'}}>
                    <button onClick={() => onQty(-1)} style={{background:'none',border:0,cursor:'pointer',padding:'6px 10px',color:'var(--text-heading)',display:'flex'}}><i data-lucide="minus" style={{width:14,height:14}}></i></button>
                    <span style={{minWidth:'22px',textAlign:'center',fontWeight:600,fontVariantNumeric:'tabular-nums'}}>{count}</span>
                    <button onClick={() => onQty(1)} style={{background:'none',border:0,cursor:'pointer',padding:'6px 10px',color:'var(--text-heading)',display:'flex'}}><i data-lucide="plus" style={{width:14,height:14}}></i></button>
                  </div>
                  <span style={{fontWeight:700,color:'var(--text-heading)',fontVariantNumeric:'tabular-nums'}}>{(unit*count).toLocaleString('vi-VN')}₫</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div style={{padding:'var(--sp-lg)',borderTop:'1px solid var(--divider)'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'var(--sp-md)',color:'var(--text-muted)',fontSize:'var(--size-caption)'}}>
            <span>Giao hàng</span><span>Miễn phí</span>
          </div>
          <Button fullWidth size="lg" disabled={count===0} onClick={onCheckout}>Thanh toán · {(unit*count).toLocaleString('vi-VN')}₫</Button>
        </div>
      </aside>
    </>
  );
}

function Checkout({ step, onSubmit, onClose }) {
  if (!step) return null;
  return (
    <div style={{position:'fixed',inset:0,zIndex:50,background:'rgba(25,36,32,.45)',display:'grid',placeItems:'center',padding:'var(--sp-lg)'}}>
      <div style={{width:'480px',maxWidth:'100%',background:'var(--surface-card)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-raised)',padding:'var(--sp-lg)',fontFamily:'var(--font-body)'}}>
        {step === 'form' ? (
          <>
            <strong style={{display:'block',fontFamily:'var(--font-display)',fontSize:'var(--size-h3)',fontWeight:'var(--weight-semibold)',color:'var(--text-heading)'}}>Thông tin giao hàng</strong>
            <Field label="Họ và tên" placeholder="Nguyễn Văn A" />
            <Field label="Số điện thoại" placeholder="09xx xxx xxx" />
            <Field label="Địa chỉ" placeholder="Số nhà, đường, quận" />
            <div style={{display:'flex',gap:'var(--sp-sm)',marginTop:'var(--sp-md)'}}>
              <Button onClick={onSubmit}>Đặt hàng</Button>
              <Button variant="ghost" onClick={onClose}>Quay lại</Button>
            </div>
          </>
        ) : (
          <div style={{textAlign:'center',padding:'var(--sp-md) 0'}}>
            <span style={{display:'grid',placeItems:'center',width:'56px',height:'56px',borderRadius:'var(--radius-pill)',background:'var(--surface-tint)',color:'var(--action-primary)',margin:'0 auto var(--sp-md)'}}>
              <i data-lucide="check" style={{width:28,height:28}}></i>
            </span>
            <strong style={{display:'block',fontFamily:'var(--font-display)',fontSize:'var(--size-h3)',fontWeight:'var(--weight-semibold)',color:'var(--text-heading)'}}>Đã nhận đơn hàng</strong>
            <p style={{color:'var(--text-muted)',margin:'var(--sp-sm) 0 var(--sp-lg)'}}>Chúng tôi gọi xác nhận trong 2 giờ làm việc.</p>
            <Button onClick={onClose}>Xong</Button>
          </div>
        )}
      </div>
    </div>
  );
}

function BuyBar({ visible, onAdd, onBuy }) {
  return (
    <div style={{position:'fixed',left:0,right:0,bottom:0,zIndex:30,background:'rgba(255,255,255,.94)',backdropFilter:'blur(12px)',borderTop:'1px solid var(--ink-a08)',boxShadow:'var(--shadow-raised)',transform:visible?'translateY(0)':'translateY(100%)',transition:'transform var(--dur-fast) var(--ease-out)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--sp-md) var(--sp-lg)',display:'flex',alignItems:'center',gap:'var(--sp-md)'}}>
        <img src="../../assets/product-1.png" alt="" style={{width:'44px',height:'44px',objectFit:'cover',borderRadius:'var(--radius-sm)'}} />
        <div>
          <strong style={{display:'block',color:'var(--text-heading)',fontWeight:'var(--weight-semibold)',fontSize:'15px'}}>Sling Limit05</strong>
          <span style={{color:'var(--text-muted)',fontSize:'13px'}}>590.000₫ · miễn phí giao hàng</span>
        </div>
        <div style={{marginLeft:'auto',display:'flex',gap:'var(--sp-sm)'}}>
          <Button variant="ghost" onClick={onAdd}>Thêm giỏ hàng</Button>
          <Button onClick={onBuy}>Mua ngay</Button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const link = {color:'var(--text-on-inverse)',opacity:.8,textDecoration:'none',fontSize:'14px'};
  return (
    <footer style={{background:'var(--surface-inverse)',marginTop:'var(--sp-xl)',padding:'var(--sp-xl) var(--sp-lg) 120px'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:'var(--sp-xl)'}}>
        <div>
          <BrandMark tone="white" size={36} assetBase="../../assets/" />
          <p style={{color:'var(--text-on-inverse)',opacity:.75,fontSize:'14px',lineHeight:1.6,margin:'var(--sp-md) 0 0',maxWidth:'34ch'}}>
            Túi kỹ thuật cho di chuyển hàng ngày. Tự do — Khác biệt — Bền bỉ.
          </p>
        </div>
        <div style={{display:'grid',gap:'var(--sp-sm)',alignContent:'start'}}>
          <span style={{color:'var(--text-on-inverse)',fontWeight:600,fontSize:'14px',marginBottom:'var(--sp-xs)'}}>Sản phẩm</span>
          <a href="#tinh-nang" style={link}>Tính năng</a><a href="#chat-lieu" style={link}>Chất liệu</a><a href="#thong-so" style={link}>Thông số</a>
        </div>
        <div style={{display:'grid',gap:'var(--sp-sm)',alignContent:'start'}}>
          <span style={{color:'var(--text-on-inverse)',fontWeight:600,fontSize:'14px',marginBottom:'var(--sp-xs)'}}>Hỗ trợ</span>
          <a href="#" style={link}>Bảo hành 24 tháng</a><a href="#" style={link}>Đổi trả 30 ngày</a><a href="#" style={link}>Liên hệ</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CartDrawer, Checkout, BuyBar, Footer });
