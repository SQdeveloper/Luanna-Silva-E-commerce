const data = [
    {
        id: 1,
        name: 'Marcia Jacket - Graphite',
        image: 'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 130,
        colors: ['black','gray','blue'],
        category: ['women','summer'],
        talla: 's l m'
    },
    {
        id: 2,
        name: 'Marcia Jacket - LightGreen',
        image: 'https://images.unsplash.com/photo-1556347961-f9521a88cb8a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 110,
        colors: ['green','lightblue','blue'],
        category: ['women','spring'],
        talla: 's xl'
    },
    {
        id: 3,
        name: 'Croptop Texas - Black',
        image: 'https://plus.unsplash.com/premium_photo-1688497831081-836510928186?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 148,
        colors: ['black','lightgreen','purple'],
        category: ['men','summer'],
        talla: 'xl m'
    },
    {
        id: 4,
        name: 'Tokyo Polo - Black',
        image: 'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 250,
        colors: ['black','lightcoral','lightblue'],
        category: ['men','summer'],
        talla: 's l m'
    },
    {
        id: 5,
        name: 'Mabys Dress - Pink',
        image: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 222,
        colors: ['lightgray','lightcoral','lightsalmon'],
        category: ['women','spring'],
        talla: 's m'
    },
    {
        id: 6,
        name: 'Pointed Heel - Pink',
        image: 'https://images.pexels.com/photos/1507351/pexels-photo-1507351.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 143,
        colors: ['pink','lightgreen','purple'],
        category: ['women','heels'],
        talla: 'l'
    },
    {
        id: 7,
        name: 'Ana08 Wheat Suede',
        image: 'https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 234,
        colors: ['red','purple','yellow'],
        category: ['women','heels'],
        talla: 's m'
    },
    {
        id: 8,
        name: 'Chocolate Suede',
        image: 'https://images.pexels.com/photos/1040384/pexels-photo-1040384.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 90,
        colors: ['black','gray','lightgreen'],
        category: ['women','heels'],
        talla: 's'
    },
    {
        id: 9,
        name: 'Tais16 Red Natural Leather',
        image: 'https://images.pexels.com/photos/3782788/pexels-photo-3782788.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 130,
        colors: ['black','brown','ligthblue'],
        category: ['women','heels'],
        talla: 'm l'
    },
    {
        id: 10,
        name: 'Hypnotic Tacojane V4 Women',
        image: 'https://images.pexels.com/photos/2085527/pexels-photo-2085527.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 80,
        colors: ['lightgray','lightsalmon','blue'],
        category: ['women','heels'],
        talla: 'xl'
    },
    {
        id: 11,
        name: 'Demi Jean Dark Stiletto',
        image: 'https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 98,
        colors: ['yellow','lightcoral','red'],
        category: ['women','heels'],
        talla: 'm'
    },
    {
        id: 12,
        name: 'Libya Jean Clear Sandals',
        image: 'https://images.pexels.com/photos/3482571/pexels-photo-3482571.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 110,
        colors: ['pink','lightseagreen','lightcoral'],
        category: ['women','heels'],
        talla: 'm xl'
    },
    {
        id: 13,
        name: 'Kate Black Suede Stiletto',
        image: 'https://images.pexels.com/photos/3023238/pexels-photo-3023238.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 217,
        colors: ['gray','red','lightgray'],
        category: ['women','heels'],
        talla: 's m l'
    },
    {
        id: 14,
        name: 'Lauren White Stiletto',
        image: 'https://images.pexels.com/photos/273930/pexels-photo-273930.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 218,
        colors: ['lightgray','lightgreen','lightcoral'],
        category: ['women','heels'],
        talla: 'xl m'
    },
    {
        id: 15,
        name: 'Valeria Black Suede Heels',
        image: 'https://cdn.pixabay.com/photo/2021/10/11/18/56/shoes-6701631_640.jpg',
        price: 63,
        colors: ['goldenrod','lightgray','purple'],
        category: ['women','heels'],
        talla: 's xl'
    },
    {
        id: 16,
        name: 'Margaret Beige Silk Heels',
        image: 'https://cdn.pixabay.com/photo/2017/03/29/04/47/high-heels-2184095_640.jpg',
        price: 156,
        colors: ['red','purple','blue'],
        category: ['women','heels'],
        talla: 'm l'
    },
    {
        id: 17,
        name: 'Black Patent Leather Heels',
        image: 'https://images.pexels.com/photos/6046186/pexels-photo-6046186.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 30,
        colors: ['black','blue','lightgreen'],
        category: ['women','heels'],
        talla: 'm l'
    },
    {
        id: 18,
        name: 'Valentina Black Patent Leather Heels',
        image: 'https://images.pexels.com/photos/12750409/pexels-photo-12750409.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 146,
        colors: ['green','yellow','gray'],
        category: ['women','heels'],
        talla: 's'
    },
    {
        id: 19,
        name: 'Maité Beige Patent Leather Heels',
        image: 'https://images.pexels.com/photos/10496560/pexels-photo-10496560.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 96,
        colors: ['black','lightblue','blue'],
        category: ['women','heels'],
        talla: 'l m'
    },
    {
        id: 20,
        name: 'Pearly Gold Adriana Tacos',
        image: 'https://images.unsplash.com/photo-1613987876445-fcb353cd8e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVlbHN8ZW58MHx8MHx8fDA%3D',
        price: 72,
        colors: ['red','green','goldenrod'],
        category: ['women','heels'],
        talla: 's m xl'
    },
    {
        id: 21,
        name: 'Zero Sleeve Pleated Bobo Blouse',
        image: 'https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 117,
        colors: ['lightgray','lightblue','lightcoral'],
        category: ['women','summer'],
        talla: 'm s'
    },
    {
        id: 22,
        name: 'Blouse Zero Sleeve Bobo Gathered Sleeves',
        image: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 243,
        colors: ['blue','purple','lightgreen'],
        category: ['women','summer'],
        talla: 'm xl'
    },
    {
        id: 23,
        name: 'Zero Sleeve Slim Fit Blouse',
        image: 'https://images.unsplash.com/photo-1618375531912-867984bdfd87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 87,
        colors: ['blue','lightgreen','lightgray'],
        category: ['women','summer'],
        talla: 's l'
    },
    {
        id: 24,
        name: 'Short sleeve puffed polo shirt',
        image: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 223,
        colors: ['lightgray','bisque','lightcoral'],
        category: ['women','autumn'],
        talla: 's m xl'
    },
    {
        id: 25,
        name: '3/4 sleeve polo shirt',
        image: 'https://images.unsplash.com/photo-1586078130702-d208859b6223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 164,
        colors: ['black','lightgreen','pink'],
        category: ['women','summer'],
        talla: 'm l xl'
    },
    {
        id: 26,
        name: 'Blazer Jacket 3/4 Closure Gold',
        image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 194,
        colors: ['aqua','lightgreen','yellow'],
        category: ['women','summer'],
        talla: 's'
    },
    {
        id: 27,
        name: 'Windbreaker Jacket',
        image: 'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 171,
        colors: ['black','gray','lightgray'],
        category: ['women','autumn'],
        talla: 'm l xl'
    },
    {
        id: 28,
        name: 'Long Sleeve Double Sleeve Dress',
        image: 'https://images.unsplash.com/photo-1609748106043-0e89cc9f285e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 66,
        colors: ['purple','goldenrod','pink'],
        category: ['women','autumn'],
        talla: 's m'
    },
    {
        id: 29,
        name: 'Long Sleeve Dress Round Neckline',
        image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 129,
        colors: ['pink','aqua','lightgreen'],
        category: ['women','autumn'],
        talla: ' xl l m'
    },
    {
        id: 30,
        name: 'Denim Long Sleeve Jacket',
        image: 'https://images.unsplash.com/photo-1525393839361-867d646aea41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 201,
        colors: ['white','gray','lightblue'],
        category: ['men','summer'],
        talla: 'm xl'
    },
    {
        id: 31,
        name: 'Denim Long Sleeve Jacket',
        image: 'https://images.unsplash.com/photo-1616536864526-b6521cca81b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 69,
        colors: ['lightblue','black','blue'],
        category: ['women','autumn'],
        talla: 's'
    },
    {
        id: 32,
        name: 'Polo Short Sleeve Front Cup',
        image: 'https://images.unsplash.com/photo-1625794913247-b8138fd9edb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 77,
        colors: ['lightblue','pink','purple'],
        category: ['women','summer'],
        talla: 'm x l'
    },
    {
        id: 33,
        name: 'Long Sleeve Round Neck Polo Shirt',
        image: 'https://images.unsplash.com/photo-1570215778416-399723c225d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 194,
        colors: ['black','goldenrod','gray'],
        category: ['women','summer'],
        talla: 'm xl'
    },
    {
        id: 34,
        name: 'Polo Short Sleeve Cup',
        image: 'https://images.unsplash.com/photo-1588731247530-4076fc99173e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 188,
        colors: ['gray','black','blue'],
        category: ['men','summer'],
        talla: 's'
    },
    {
        id: 35,
        name: '3/4 sleeve polo shirt',
        image: 'https://plus.unsplash.com/premium_photo-1669703777657-41f5adb14e9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 99,
        colors: ['lightgray','lightblue','lightgreen'],
        category: ['men','summer'],
        talla: 'm xl l'
    },
    {
        id: 36,
        name: 'Manga Blouse Cero Tira',
        image: 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 158,
        colors: ['goldenrod','black','gray'],
        category: ['men','summer'],
        talla: 's l'
    },
    {
        id: 37,
        name: 'Front Buttons Sack',
        image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 218,
        colors: ['blue','purple','crimson'],
        category: ['men','winter'],
        talla: 'l'
    },
    {
        id: 38,
        name: 'zero sleeve jacket',
        image: 'https://images.unsplash.com/photo-1514222788835-3a1a1d5b32f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 30,
        colors: ['lightgray','lightblue','black'],
        category: ['men','winter'],
        talla: 's'
    },
    {
        id: 39,
        name: 'Sweater Bajomanga Gathered',
        image: 'https://images.unsplash.com/photo-1613940102159-1e7a40f2b60e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxtb2RlbHMlMjBtZW58ZW58MHx8MHx8fDA%3D',
        price: 140,
        colors: ['goldenrod','blue','lightgray'],
        category: ['men','spring'],
        talla: 's'
    },
    {
        id: 40,
        name: 'Polo Short Sleeve Front Cup',
        image: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 168,
        colors: ['lightblue','green','aqua'],
        category: ['men','summer'],
        talla: 'm l'
    },
    {
        id: 41,
        name: 'Denim Long Sleeve Jacket',
        image: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 231,
        colors: ['black','blue','red'],
        category: ['men','winter'],
        talla: 's'
    },
    {
        id: 42,
        name: 'Cafarena Double Front',
        image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 201,
        colors: ['purple','lightblue','red'],
        category: ['men','winter'],
        talla: 'xl s'
    },
    {
        id: 43,
        name: 'Hooded Zip-up Jacket',
        image: 'https://images.unsplash.com/photo-1523205565295-f8e91625443b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 191,
        colors: ['lightblue','black','white'],
        category: ['men','spring'],
        talla: 's'
    },
    {
        id: 44,
        name: 'Long Sleeve Jacket',
        image: 'https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 157,
        colors: ['lightblue','goldenrod','lightgray'],
        category: ['men','summer'],
        talla: 'm l'
    },
    {
        id: 45,
        name: 'Windbreaker Jacket',
        image: 'https://images.unsplash.com/photo-1532660621034-fb55e2e59762?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 144,
        colors: ['black','red','purple'],
        category: ['men','winter'],
        talla: 'xl l'
    },
    {
        id: 46,
        name: 'Blazer Jacket 3/4 Zip',
        image: 'https://images.unsplash.com/photo-1563452965085-2e77e5bf2607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxtb2RlbHMlMjBtZW58ZW58MHx8MHx8fDA%3D',
        price: 113,
        colors: ['red','blue','black'],
        category: ['men','autumn'],
        talla: 's l m'
    },
    {
        id: 47,
        name: 'Front Buttons Sack',
        image: 'https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxtb2RlbHMlMjBtZW58ZW58MHx8MHx8fDA%3D',
        price: 166,
        colors: ['black','green','blue'],
        category: ['men','winter'],
        talla: 's'
    },
    {
        id: 48,
        name: 'Long sleeve puffed polo shirt',
        image: 'https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_640.jpg',
        price: 184,
        colors: ['lightgray','lightgreen','blue'],
        category: ['women','summer'],
        talla: 's'
    },  
    {
        id: 50,
        name: 'Fur Collar Coat',
        image: 'https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 90,
        colors: ['white','pink','lightgray'],
        category: ['women','spring'],
        talla: 's l'
    },
    {
        id: 51,
        name: 'Double lapel coat',
        image: 'https://images.unsplash.com/photo-1545194828-a1cf868f1b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        price: 55,
        colors: ['goldenrod','lightcoral','lightblue'],
        category: ['women','spring'],
        talla: 's xl'
    },
    {
        id: 52,
        name: 'Bolillo V-neck blouse with Bolillo bib',
        image: 'https://images.unsplash.com/photo-1523260578934-e9318da58c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
        price: 177,
        colors: ['white','purple','aqua'],
        category: ['women','spring'],
        talla: 's'
    },
    {
        id: 53,
        name: 'Short Sleeve Full Dress',
        image: 'https://images.unsplash.com/photo-1616536864480-dd12d670d886?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        price: 137,
        colors: ['lightblue','black','lightcoral'],
        category: ['women','spring'],
        talla: 'l'
    },
    {
        id: 54,
        name: 'Cafarena Double Front',
        image: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
        price: 199,
        colors: ['red','yellow','pink'],
        category: ['women','spring'],
        talla: 's l'
    },
    {
        id: 55,
        name: 'Princess Cut Coat',
        image: 'https://images.unsplash.com/photo-1516522973472-f009f23bba59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
        price: 105,
        colors: ['black','yellow','lightblue'],
        category: ['women','spring'],
        talla: 'xl'
    },
    {
        id: 56,
        name: 'Fur Collar Coat',
        image: 'https://images.unsplash.com/photo-1541595948840-f299cdb13759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        price: 68,
        colors: ['red','pink','black'],
        category: ['women','spring'],
        talla: 's'
    },
    {
        id: 57,
        name: 'Short sleeve puffed polo shirt',
        image: 'https://images.unsplash.com/photo-1622445275992-e7efb32d2257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
        price: 77,
        colors: ['white','lightcoral','lightgray'],
        category: ['women','spring'],
        talla: 'l xl m'
    },
    {
        id: 58,
        name: 'Denim Long Sleeve Jacket',
        image: 'https://images.unsplash.com/photo-1569608104568-73c618c469ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 237,
        colors: ['black','lightgray','green'],
        category: ['men','spring'],
        talla: 's'
    },
    {
        id: 59,
        name: 'Denim Long Sleeve Jacket',
        image: 'https://images.unsplash.com/photo-1589881644989-19d7fa2be961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
        price: 184,
        colors: ['lightblue','lightgray','pink'],        
        category: ['women','spring'],
        talla: 'm l'
    },
    {
        id: 61,
        name: 'Rayon Pastel Dress',
        image: 'https://images.unsplash.com/photo-1546536133-d1b07a9c768e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        price: 155,
        colors: ['lightblue','green','purple'],
        category: ['women','spring'],
        talla: 'xl l'
    },
    {
        id: 62,
        name: 'Basics Sleeve Polo',
        image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
        price: 136,
        colors: ['red','pink','orange'],
        category: ['women','spring'],
        talla: 's'
    },    
    {///////// Kids
        id: 63,
        name: 'Long Dress With Straps',
        image: 'https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 176,
        colors: ['white','pink','orange'],
        category: ['kids','spring'],
        talla: 's l m'
    },
    {
        id: 64,
        name: 'Strapless Dress',
        image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=600',
        price: 86,
        colors: ['purple','pink','blue'],
        category: ['kids','spring'],
        talla: 'm l'
    },
    {
        id: 65,
        name: 'Strapless bodysuit',
        image: 'https://images.pexels.com/photos/3661370/pexels-photo-3661370.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 188,
        colors: ['green','lightcoral','goldenrod'],
        category: ['kids','spring'],
        talla: 's'
    },
    {
        id: 66,
        name: 'Versash fleece jacket',
        image: 'https://images.pexels.com/photos/2533326/pexels-photo-2533326.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 222,
        colors: ['yellow','red','purple'],
        category: ['kids','spring'],
        talla: 's l'
    },
    {
        id: 67,
        name: 'Long collar shirt',
        image: 'https://images.pexels.com/photos/1650281/pexels-photo-1650281.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 200,
        colors: ['blue','lightcoral','aqua'],
        category: ['kids','spring'],
        talla: 'm l'
    },
    {
        id: 68,
        name: 'Princess style dress',
        image: 'https://images.pexels.com/photos/3661508/pexels-photo-3661508.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 209,
        colors: ['red','pink','purple'],
        category: ['kids','spring'],
        talla: 's xl'
    },
    {
        id: 69,
        name: 'Long collar jean jacket',
        image: 'https://images.pexels.com/photos/936120/pexels-photo-936120.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 163,
        colors: ['blue','green','pink'],
        category: ['kids','spring'],
        talla: 'xl l'
    },
    {
        id: 70,
        name: 'Thick fleece jacket',
        image: 'https://images.pexels.com/photos/4055337/pexels-photo-4055337.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 195,
        colors: ['yellow','orange','red'],
        category: ['kids','spring'],
        talla: 's'
    },
    {
        id: 71,
        name: 'Summer shirt',
        image: 'https://images.pexels.com/photos/1068209/pexels-photo-1068209.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 232,
        colors: ['blue','lightblue','black'],
        category: ['kids','spring'],
        talla: 'xl l'
    },
    {
        id: 72,
        name: 'Cafarena long neck',
        image: 'https://images.pexels.com/photos/1096147/pexels-photo-1096147.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 75,
        colors: ['green','purple','yellow'],
        category: ['kids','spring'],
        talla: 'm l'
    },
    {
        id: 73,
        name: 'Short sleeve caffeine',
        image: 'https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 48,
        colors: ['white','lightgray','green'],
        category: ['kids','spring'],
        talla: 's l'
    },
    {
        id: 74,
        name: 'Camisa sleeve',
        image: 'https://images.pexels.com/photos/3771682/pexels-photo-3771682.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 139,
        colors: ['yellow','blue','lightblue'],
        category: ['kids','spring'],
        talla: 's l m'
    },
    {
        id: 75,
        name: 'Lightweight classic polo shirt',
        image: 'https://images.pexels.com/photos/1855991/pexels-photo-1855991.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 247,
        colors: ['green','blue','orange'],
        category: ['kids','spring'],
        talla: 'm l xl'
    },
    {//Bags
        id: 76,
        name: 'Travel backpack',
        image: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 247,
        colors: ['green','blue','orange'],
        category: ['bags','spring'],        
    },
    {
        id: 77,
        name: 'Classic style backpack',
        image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 157,
        colors: ['blue','purple','goldenrod'],
        category: ['bags'],        
    },
    {
        id: 78,
        name: 'Minimalist small backpack',
        image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 80,
        colors: ['black','lightgray','white'],
        category: ['bags'],        
    },
    {
        id: 79,
        name: 'Multi-space backpack',
        image: 'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 198,
        colors: ['black','green','red'],
        category: ['bags'],        
    },
    {
        id: 80,
        name: 'Elegant wallet',
        image: 'https://images.pexels.com/photos/1039518/pexels-photo-1039518.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 153,
        colors: ['red','purple','lightcoral'],
        category: ['bags'],        
    },
    {
        id: 81,
        name: 'Magnetic handbag',
        image: 'https://images.pexels.com/photos/1381562/pexels-photo-1381562.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 201,
        colors: ['red','blue','orange'],
        category: ['bags'],        
    },
    {
        id: 82,
        name: 'Classic style backpack',
        image: 'https://images.pexels.com/photos/2452345/pexels-photo-2452345.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 231,
        colors: ['lightgray','black','green'],
        category: ['bags'],        
    },
    {
        id: 83,
        name: 'Elegant handbag',
        image: 'https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 112,
        colors: ['goldenrod','lightblue','aqua'],
        category: ['bags'],        
    },
    {
        id: 84,
        name: 'Backpack style versach',
        image: 'https://images.pexels.com/photos/1375839/pexels-photo-1375839.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 174,
        colors: ['goldenrod','black','white'],
        category: ['bags'],        
    },
    {
        id: 85,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/1231059/pexels-photo-1231059.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 128,
        colors: ['black','yellow','blue'],
        category: ['bags'],        
    },
    {//new
        id: 86,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 128,
        colors: ['pink','yellow','blue'],
        category: ['new'],
        talla: 'm l'
    },
    {
        id: 87,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/3616388/pexels-photo-3616388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 178,
        colors: ['blue','white','lightcoral'],
        category: ['new'],
        talla: 'm'
    },
    {
        id: 88,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/2323094/pexels-photo-2323094.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 137,
        colors: ['yellow','black','green'],
        category: ['new'],
        talla: 'xl'
    },
    {
        id: 89,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/2494610/pexels-photo-2494610.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 228,
        colors: ['black','pink','lightblue'],
        category: ['new'],
        talla: 'm xl'
    },
    {
        id: 90,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/3036909/pexels-photo-3036909.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 68,
        colors: ['pink','purple','lightgreen'],
        category: ['new'],
        talla: 'l xl'
    },
    {
        id: 91,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/2097601/pexels-photo-2097601.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 208,
        colors: ['lightblue','goldenrod','lightgray'],
        category: ['new'],
        talla: 'm l xl'
    },
    {
        id: 92,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/1872090/pexels-photo-1872090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 101,
        colors: ['red','aqua','white'],
        category: ['new'],
        talla: 'm l xl'
    },
    {
        id: 93,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 155,
        colors: ['blue','yellow','red'],
        category: ['new'],
        talla: 'm l xl'
    },
    {
        id: 94,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/2097650/pexels-photo-2097650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 231,
        colors: ['goldenrod','greeb','black'],
        category: ['new'],
        talla: 'm l xl'
    },
    {
        id: 95,
        name: 'Sticky top backpack',
        image: 'https://images.pexels.com/photos/2688031/pexels-photo-2688031.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        price: 211,
        colors: ['red','lighgray','lightcoral'],
        category: ['new'],
        talla: 'm l xl'
    },
]

export default data;