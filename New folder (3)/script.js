setInterval( ()=>{
  d = new Date();
  htime=d.getHours();
  mtime=d.getMinutes();
  stime=d.getSeconds();
  hRotations= 30*htime+mtime/2+stime/120;
  mRotations=6*mtime+stime/12;
  sRotations=6*stime;
  hour.style.transform= `rotate(${hRotations}deg)`;
  minute.style.transform= `rotate(${mRotations}deg)`;
  second.style.transform= `rotate(${sRotations}deg)`;
},1000);