const cookie = require('react-cookie')
const axios = require('axios');
const React = require('react');
const EditInfo = require('./profile/edit-info');
const UserInfo = require('./profile/user-info');
import PhotoBoothModal from './profile/photo-booth-modal';
import TrashLook from './profile/utils/trash-look';
import TrashLookTwo from './profile/utils/trash-look-two';
import TrashLookThree from './profile/utils/trash-look-three';
import TrashLookFour from './profile/utils/trash-look-four';
import TrashLookFive from './profile/utils/trash-look-five';
import TrashLookSix from './profile/utils/trash-look-six';
// const PhotoBooth = require('./profile/photo-booth');

const Profile = React.createClass({
    componentWillMount() {
        // Fetch user data prior to component mounting
        let user = cookie.load('user');
        console.log("this user is:", user._id + " " + user.email);

        if (user == undefined) {
            window.location.href = 'http://localhost:8080/login';
        } else {
            let gender = user.is_male;
            if (gender === false) {
                gender = "girl";
            } else {
                gender = "guy";
            }
            this.setState({
                firstName: user.firstName,
                lastInitial: user.lastInitial,
                age: user.age,
                age_pref_min: user.age_pref_min,
                age_pref_max: user.age_pref_max,
                is_male: gender,
                seeking_male: user.seeking_male,
                look: user.looks[0] ? user.looks[0].link : "",
                lookTwo: user.looks[1] ? user.looks[1].link : "",
                lookThree: user.looks[2] ? user.looks[2].link : "",
                lookFour: user.looks[3] ? user.looks[3].link : "",
                lookFive: user.looks[4] ? user.looks[4].link : "",
                lookSix: user.looks[5] ? user.looks[4].link : "",
            })
        }
    },

     check() {

        console.log(window.location.href.indexOf("edit-info"));

        if (window.location.href.indexOf("edit-info") > -1) {
            return (
                <EditInfo firstName={this.state.firstName} 
                          lastInitial={this.state.lastInitial} 
                          is_male={this.state.is_male} age={this.state.age} 
                          seeking_male={this.state.seeking_male}
                          age_pref_min={this.state.age_pref_min} 
                          age_pref_max={this.state.age_pref_max} 
                          profile_look={this.state.profile_look} />
            );
        } else {
            return (
                <UserInfo firstName={this.state.firstName} 
                          lastInitial={this.state.lastInitial} 
                          is_male={this.state.is_male} age={this.state.age}
                          seeking_male={this.state.seeking_male} 
                          age_pref_min={this.state.age_pref_min} 
                          age_pref_max={this.state.age_pref_max} 
                          look={this.state.look}
                          lookTwo={this.state.lookTwo}
                          lookThree={this.state.lookThree}
                          lookFour={this.state.lookFour}
                          lookFive={this.state.lookFive}
                          lookSix={this.state.lookSix} />
            );
        }
    },

    render: function () {

        return (
            <div>
                <div className="lookContainer">
                    <span className="look"><video id="vid-look" className="video" src={this.state.look} />
                    {this.state.look ? <TrashLook /> : <PhotoBoothModal />}
                    </span>
                    <span className="look"><video id="vid-look" className="video" src={this.state.lookTwo} />
                    {this.state.lookTwo ? <TrashLookTwo /> : <PhotoBoothModal />}
                    </span>
                    <span className="look"><video id="vid-look" className="video" src={this.state.lookThree} />
                    {this.state.lookThree ? <TrashLookThree /> : <PhotoBoothModal />}
                    </span>
                    <span className="look"><video id="vid-look" className="video" src={this.state.lookFour} />
                    {this.state.lookFour ? <TrashLookFour /> : <PhotoBoothModal />}
                    </span>
                    <span className="look"><video id="vid-look" className="video" src={this.state.lookFive} />
                    {this.state.lookFive ? <TrashLookFive /> : <PhotoBoothModal />}
                    </span>
                    <span className="look"><video id="vid-look" className="video" src={this.state.lookSix} />
                    {this.state.lookSix ? <TrashLookSix /> : <PhotoBoothModal />}
                    </span>
                </div>
               {this.check()}
            </div>
        );
    }
});

module.exports = Profile;