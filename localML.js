import { AmazonConnectApp } from "@amazon-connect/app";

const { connectApp } = AmazonConnectApp.init({
onCreate: (event) => {
    const { appInstanceId } = event.context;
    console.log('App initialized: ', appInstanceId);
},
onDestroy: (event) => {
    console.log('App being destroyed');
},
}); 