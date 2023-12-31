let instance;
async function init() {
    try {
        const { Core: ComponentLibrary } = await import(/* webpackMode: "lazy" */'component-library');
        instance = new ComponentLibrary;
    } catch (e) {
        console.log(e);
    }
}

init();

window.initiateIdVerification = function() {
    if(instance) {
        instance.create('IdVerification', {
            handleGetIdVerificationToken: () => new Promise((r)=>r({sdkToken: '123124'})),
            onIdVerificationClose:() => console.log('onfido close'),
            onIdVerificationError:() => console.log('onfido error'),
            userDetails:{firstName: 'firstName', lastName: 'lastName', residencyCountry: 'US'}
        }, document.getElementById('container'));
    }
}




