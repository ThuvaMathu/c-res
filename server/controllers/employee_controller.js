
const db = require('../config/db.config.js');
const employee = db.employee;


/**
 * Retrieve candidate information from database
 * @param {*} req 
 * @param {*} res 
 */

exports.employee = (req, res) => {
    // find all candidate information from 
    try{
        employee.findAll({attributes: [`id`, `Candidate_id`, `name`, `gender`, `email`, `address`, `phone`, `qualification`, `st_salary`, `department`, `em_role`, `description`, `hours`]})
        .then(employee => {
            res.status(200).json(employee);
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

/******************************************** update employee *************************************/
/**
 * Updating a Customer
 * @param {*} req 
 * @param {*} res 
 */
 exports.updateemployee = async (req, res) => {
     
    try{
        let employees = await employee.findByPk(req.body.id);
    
        if(!employees){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating a employee with id = " + employees,
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                id: req.body.id,
               Candidate_id: req.body.candidate_id,
                name: req.body.name,
                gender: req.body.gender,
                address: req.body.address,
                email: req.body.email,
                hours: req.body.hours,
                phone: req.body.phone,
                qualification: req.body.qualification,
                em_role: req.body.role,
                department: req.body.department,
                //description: req.body.description,
                st_salary: req.body.salary,

            }
            let result = await employee.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.Id},
                                attributes: [`id`, `Candidate_id`, `name`, `gender`, `email`, `address`, `phone`, `qualification`, `st_salary`, `department`, `em_role`, `description`, `hours`]
        
                              }
                            );

            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update a customer with id = " + req.body.id,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update a customer with id = " + req.body.id,
            error: error.message
        });
    }
}
/************************************************ find by id *****************************************************/
exports.getemployee = (req, res) => {
    employee.findByPk(req.params.id, 
                        {attributes: [`id`, `Candidate_id`, `name`, `gender`, `email`, `address`, `phone`, `qualification`, `st_salary`, `department`, `em_role`, `description`, `hours`]})
        .then(employee => {
          res.status(200).json(employee);
        }).catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        })
}