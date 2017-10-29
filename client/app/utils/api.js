var axios = require('axios');



function handleError(error) {
    console.warn(error);
    return null;
}


module.exports = {
    fetchProject: function () {
        console.log("im started");
        var encodedURI = window.encodeURI('/users');

        return axios.get(encodedURI, {port:1337})
            .then(function (users) {
                return users.data;
            });
    },
    fetchProjects: function (lang) {
        console.log("im started");
        var encodedURI = window.encodeURI('http://nicklasenvall.se/api.php/projects');

        return axios.get(encodedURI)
            .then(function (users) {
                return users.data;
            });
    }
};


// fetchPopularRepos('Java')
//     .then()
