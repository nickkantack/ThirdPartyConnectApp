import { AmazonConnectApp } from "@amazon-connect/app";

// Configure logic around the hand pose
handPoseUpdate = function(hands) {
    handIndicator.innerHTML = hands && hands.length ? hands[0].score : 0;
}

const { connectApp } = AmazonConnectApp.init({
    onCreate: (event) => {
        const { appInstanceId } = event.context;
        console.log('App initialized: ', appInstanceId);
    },
    onDestroy: (event) => {
        console.log('App being destroyed');
    },
}); 