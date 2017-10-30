var axios = require('axios');



function handleError(error) {
    console.warn(error);
    return null;
}


module.exports = {
    fetchUsers: function () {
        console.log("im started /users");
        var encodedURI = window.encodeURI('/users');

        return axios.get(encodedURI)
            .then(function (users) {
                return users.data;
            });
    },
    fetchReports: function () {
        console.log("im started /report");
        var encodedURI = window.encodeURI('/users/report');

        return axios.get(encodedURI)
            .then(function (reports) {
                return reports.data;
            });
    }
};


// fetchPopularRepos('Java')
//     .then()
