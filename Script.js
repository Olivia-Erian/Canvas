var elem = document.getElementById('CanvasChart');
var Chart = elem.getContext('2d');

    // Chart.beginPath();
    // Chart.fillStyle = '#352961';
    // Chart.fillRect(50,150,40,250); // x , y , width , height
    // // Chart.lineCap="round"

    // Chart.beginPath();
    // Chart.fillStyle = '#774181';
    // Chart.fillRect(120,50,40,350); // x , y , width , height

    // Chart.beginPath();
    // Chart.fillStyle = '#e6b2c6';
    // Chart.fillRect(190,250,40,150); // x , y , width , height


    // Chart.beginPath();
    // Chart.fillStyle = '#f6e5e5';
    // Chart.fillRect(260,200,40,200); // x , y , width , height


    let x=[50,120, 190,260];
    let y=[150,50,250,200];
    let h=[250,350,150,200];
    let color=['#352961', '#774181', '#e6b2c6', '#f6e5e5']

    for( let i=0; i<x.length; i++ )
    {
        Chart.fillStyle=color[i];
        Chart.fillRect(x[i], y[i], 40, h[i]);
    }

    
    Chart.beginPath();
    Chart.strokeStyle = '#022c43';
    Chart.lineWidth="3";
    Chart.moveTo(10,10);
    Chart.lineTo(10,400);
    Chart.lineTo(320,400);
    Chart.lineJoin = 'round'
    Chart.stroke();









    var i=100;
    Chart.beginPath();
    Chart.strokeStyle = '#022c43';
    Chart.arc(600, 300, 100, 0 , Math.PI/180 * 3.6 * i); // x , y , r , startAngle , endAngle
    Chart.lineWidth="20";
    Chart.stroke(); 

    var n=40;
    Chart.beginPath();
    Chart.strokeStyle = '#352961';
    Chart.arc(600, 300, 100, 0 , Math.PI/180 * 3.6 * n); // x , y , r , startAngle , endAngle
    Chart.lineWidth="20";
    Chart.stroke();

    var m=30;
    Chart.beginPath();
    Chart.strokeStyle = '#774181';
    Chart.arc(600, 300, 100, 0 ,  Math.PI/180 * 3.6 * m); // x , y , r , startAngle , endAngle
    Chart.lineWidth="20";
    Chart.stroke();

    var z=10;
    Chart.beginPath();
    Chart.strokeStyle = '#e6b2c6';
    Chart.arc(600, 300, 100, 0 ,  Math.PI/180 * 3.6 * z); // x , y , r , startAngle , endAngle
    Chart.lineWidth="20";
    Chart.stroke();



    // Chart.beginPath();
    // Chart.strokeStyle = '#022c43';
    // Chart.arc(600, 300, 100, 0 , 2 * Math.PI); // x , y , r , startAngle , endAngle
    // Chart.lineWidth="20";
    // Chart.stroke(); 


    // Chart.beginPath();
    // Chart.strokeStyle = '#352961';
    // Chart.arc(600, 300, 100, 0 , 1 * Math.PI); // x , y , r , startAngle , endAngle
    // Chart.lineWidth="20";
    // Chart.stroke();


    // Chart.beginPath();
    // Chart.strokeStyle = '#774181';
    // Chart.arc(600, 300, 100, 0 , 0.8 * Math.PI); // x , y , r , startAngle , endAngle
    // Chart.lineWidth="20";
    // Chart.stroke();


    // Chart.beginPath();
    // Chart.strokeStyle = '#e6b2c6';
    // Chart.arc(600, 300, 100, 0 , 0.5 * Math.PI); // x , y , r , startAngle , endAngle
    // Chart.lineWidth="20";
    // Chart.stroke();

    // Chart.beginPath();
    // Chart.strokeStyle = '#f6e5e5';
    // Chart.arc(600, 300, 100, 0 , 0.3 * Math.PI); // x , y , r , startAngle , endAngle
    // Chart.lineWidth="20";
    // Chart.stroke();




    








    for( let v=0; v<10; v++)
    {
        Chart.beginPath();
        Chart.moveTo(900, 130 + v*30); // x , y (start point)
        Chart.lineTo(1300, 130 + v*30); // x , y (end point)
        Chart.strokeStyle = '#022c43';
        Chart.lineWidth = '1';
        Chart.stroke();
    }

    for( let h=0; h<15; h++)
    {
        Chart.beginPath();
        Chart.moveTo(900 + h*30, 100); // x , y (start point)
        Chart.lineTo(900 + h*30, 400); // x , y (end point)
        Chart.strokeStyle = '#022c43';
        Chart.lineWidth = '1';
        Chart.stroke();
    }


    Chart.beginPath();
    Chart.fillStyle = '#e6b2c6';
    Chart.arc(930, 340, 7, 0 , 2 * Math.PI); // x , y , r , startAngle , endAngle
    Chart.fill();

    Chart.beginPath();
    Chart.fillStyle = '#e6b2c6';
    Chart.arc(1020, 280, 7, 0 , 2 * Math.PI); // x , y , r , startAngle , endAngle
    Chart.fill();

    Chart.beginPath();
    Chart.fillStyle = '#e6b2c6';
    Chart.arc(1050, 190, 7, 0 , 2 * Math.PI); // x , y , r , startAngle , endAngle
    Chart.fill();


    Chart.beginPath();
    Chart.moveTo(930, 340); // x , y (start point)
    Chart.lineTo(1020, 280); // x , y (end point)
    Chart.strokeStyle = '#e6b2c6';
    Chart.lineWidth = '3';
    Chart.stroke();

    
    Chart.beginPath();
    Chart.lineTo(1020, 280); // x , y (start point)
    Chart.lineTo(1050, 190); // x , y (end point)
    Chart.strokeStyle = '#e6b2c6';
    Chart.lineWidth = '3';
    Chart.stroke();

    
    Chart.beginPath();
    Chart.moveTo(1050, 190); // x , y (start point)
    Chart.lineTo(1200, 310); // x , y (end point)
    Chart.strokeStyle = '#e6b2c6';
    Chart.lineWidth = '3';
    Chart.stroke();

    
    Chart.beginPath();
    Chart.moveTo(1200, 310); // x , y (start point)
    Chart.lineTo(1200, 290); // x , y (end point)
    Chart.strokeStyle = '#e6b2c6';
    Chart.lineWidth = '5';
    Chart.stroke();


    Chart.beginPath();
    Chart.moveTo(1200, 310); // x , y (start point)
    Chart.lineTo(1180, 310); // x , y (end point)
    Chart.strokeStyle = '#e6b2c6';
    Chart.lineWidth = '5';
    Chart.stroke();