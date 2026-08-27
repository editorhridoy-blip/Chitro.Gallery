const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open')});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filterButtons=document.querySelectorAll('.filters button');
const galleryItems=document.querySelectorAll('.gallery figure');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  filterButtons.forEach(x=>x.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter;
  galleryItems.forEach(item=>item.classList.toggle('hide',f!=='all'&&!item.classList.contains(f)));
}));

document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const msg=`Hello Chitro Gallery! I want to book a ${data.get('event')} date. Name: ${data.get('name')}. Phone: ${data.get('phone')}. Date: ${data.get('date')}. Location: ${data.get('place')||'Not specified'}.`;
  const wa='https://wa.me/8801745165051?text='+encodeURIComponent(msg);
  window.open(wa,'_blank');
  const toast=document.getElementById('toast');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3500);
});
