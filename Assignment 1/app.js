
let mobiles = {
    apple: {
        iphone13: {
            model: 'iphone 13',
            color: 'black',
            price: 1000,
            camera: 20,
            battery: 500,
        },
        iphone12: {
            model: 'iphone 12',
            color: 'red',
            price: 800,
            camera: 15,
            battery: 400,
        },
        iphone11: {
            model: 'iphone 11',
            color: 'white',
            price: 900,
            camera: 16,
            battery: 300,
        },
        iphoneX: {
            model: 'iphone X',
            color: 'grey',
            price: 1000,
            camera: 17,
            battery: 600,
        }

    },
    samsung: {
        s10: {
            model: 'Samsung S10',
            color: 'red',
            price: 500,
            camera: 10,
            battery: 600,
        },
        s11: {
            model: 'Samsung S11 ',
            color: 'blue',
            price: 688,
            camera: 65,
            battery: 275,
        },
        s12: {
            model: 'Samsung S12 ',
            color: 'white',
            price: 899,
            camera: 95,
            battery: 490,
        },
        s13 : {
            model: 'Samsung S13 ',
            color: 'black',
            price: 999,
            camera: 70,
            battery: 550,
        }
    },
    infinix : {
        note8 : {
            model: 'Note 8 ',
            color: 'blue',
            price: 300,
            camera: 20,
            battery: 150,
        },
        note9 : {
            model: 'Note 9',
            color: 'blue',
            price: 300,
            camera: 20,
            battery: 150,
        },
        note10 : {
            model: 'Note 10 ',
            color: 'blue',
            price: 300,
            camera: 20,
            battery: 150,
        },
        note11 : {
            model: 'Note 11 ',
            color: 'blue',
            price: 300,
            camera: 20,
            battery: 150,
        },
    },

    oppo: {
        oppoa16: {
            model: 'Oppo A16',
            color: 'golden',
            price: 5000,
            camera: 10,
            battery: 300,
        },
        oppoa57: {
            model: 'Oppo A57',
            color: 'sky blue',
            price: 2000,
            camera: 10,
            battery: 300,
        },
        oppoaf17:{
            model: 'Oppo F17 ',
            color: 'blue',
            price: 300,
            camera: 20,
            battery: 150,
        },
        oppof19:{
            model: 'Oppo F19 ',
            color: 'blue',
            price: 300,
            camera: 20,
            battery: 150,
        }
    }
}


function demo () {
    let brandName = document.getElementById('brand-name').value
    let modelName = document.getElementById('model-name').value
    
    if (mobiles[brandName] !== undefined) {
        if (mobiles[brandName][modelName] !== undefined) {
            document.getElementById('para').innerHTML = JSON.stringify(mobiles[brandName][modelName]);
        }

        else {
            document.getElementById('para').innerHTML = 'This model is not available';
        }
    }
    else if (brandName == '' || modelName == '') {
        document.getElementById('para').innerHTML='Please Enter The BrandName Or Model';
    }
    else {
        document.getElementById('para').innerHTML='This model is not available';
    }
    
};