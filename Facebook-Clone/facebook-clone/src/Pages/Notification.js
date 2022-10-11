import fb_notification from './fb_notification.jpg';
const Notification=()=>{
    return(
        <>
        <div><br/><br/>
            <center><h3>Ramar liked your profile picture</h3></center>
        </div>
        <div>
        <center><img src={fb_notification} className="fb_video" /></center>
        </div>
        </>
    );
}
export default Notification;