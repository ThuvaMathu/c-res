const db = require('../config/db.config.js');
const candidate = db.candidate;
const Scandidate = db.selected_candidate;

/**
 * Retrieve candidate information from database
 * @param {*} req 
 * @param {*} res 
 */

exports.candidate = (req, res) => {
    // find all candidate information from 
    try{
        candidate.findAll({attributes: ['id','candidate_name', 'candidate_email', 'candidate_qualification']})
        .then(candidate => {
            res.status(200).json(candidate);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}
/**
 * Retrieve candidate information from database
 * @param {*} req 
 * @param {*} res 
 */

 exports.Scandidate = (req, res) => {
    // find all candidate information from 
    try{
        Scandidate.findAll({attributes: ['id','candidate_id','candidate_name', 'candidate_email', 'candidate_qualification']})
        .then(candidate => {
            res.status(200).json(candidate);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

exports.getcandidate = (req, res) => {
    candidate.findByPk(req.params.id, 
                        {attributes: ['id','candidate_name',`candidate_lname`,'candidate_gender', 'candidate_email','candidate_addr', 'candidate_qualification','candidate_image']})
        .then(candidate => {
          res.status(200).json(candidate);
        }).catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        })
}

exports.deletecandidate = async (req, res) => {
    try{
        let candidateId = req.params.id;
        let candidates = await candidate.findByPk(candidateId);

        if(!candidates){
            res.status(404).json({
                message: "Does Not exist a candidate with id = " + candidateId,
                error: "404",
            });
        } else {
            await candidate.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a candidate with id = " + req.params.id,
            error: error.message
        });
    }
}