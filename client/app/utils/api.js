var axios = require('axios');



function handleError(error) {
    console.warn(error);
    return null;
}

module.exports = {
    fetchUsers: async function () {
        const data = await axios.get("/api/users");
        return data.data;
    },
    fetchReports: async function (id = "") {
        const reports = await axios.get("/api/report/" + id);
        return reports.data;
    },

    // mongoDB
    fetchPeople: async function () {
        const data = await axios.get("/mongodb/get");
        return data.data;
    },
    postPeople: function (params) {
        axios.post("/mongodb/insert", params);
        console.log(params);

    },
    deletePerson: function (id) {
        axios.post("/mongodb/delete", {id: id});
    },
    updatePerson: function (params) {
        axios.post("/mongodb/update", params);
    }
};


// fetchPopularRepos('Java')
//     .then()
