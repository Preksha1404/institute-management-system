import { Institute } from "../models/institute.models.js";
import { School } from "../models/school.models.js";
import { College } from "../models/college.models.js";

const registerInstitute = (req, res) => {
    // Take institute data from request body
    const { name, location, type } = req.body;
    // Validate input data
    if (!name || !location || !type) {
        return res.status(400).json({ message: "All fields are required" });
    }
    // Create a new institute
    const newInstitute = {
        name,
        location,
        type
    };
    // Save the institute to the database
    Institute.create(newInstitute)
        .then(savedInstitute => {
            res.status(201).json({ message: "Institute registered successfully", institute: savedInstitute });
        }
        )
        .catch(err => {
            console.error("Error registering institute:", err);
            res.status(500).json({ message: "Internal server error" });
        });
}

const schoolRegister = (req, res) => {
    // Implementation for school registration

    // If the Institute type is 'School', handle accordingly
    Institute.findById(req.body.institute)
        .then(institutee => {
            // console.log("Found institute:", institute);
            if (!institutee) {
                return res.status(404).json({ message: "Institute not found" });
            }

            if (institutee.type !== "School") {
                return res.status(400).json({ message: "Institute type must be 'School'" });
            }

            // Continue with school registration
            // Get the school data from request body
            const { name, educationBoard, medium, schoolClass, standards, subjects, institute } = req.body;

            // Validate input data
            if (!name || !educationBoard || !medium || !schoolClass || !standards || !subjects || !institute) {
                return res.status(400).json({ message: "All fields are required" });
            }

            // Create a new school
            const newSchool = {
                name,
                educationBoard,
                medium,
                schoolClass,
                standards,
                subjects,
                institute
            };

            // Save the school to the database
            School.create(newSchool)
                .then(savedSchool => {
                    res.status(201).json({ message: "School registered successfully", school: savedSchool });
                })
                .catch(err => {
                    console.error("Error registering school:", err);
                    res.status(500).json({ message: "Internal server error" });
                });
        })
        .catch(err => {
            console.error("Error finding institute:", err);
            return res.status(500).json({ message: "Internal server error" });
        });

}
const collegeRegister = (req, res) => {
    // Implementation for college registration

    // If the Institute type is 'College', handle accordingly
    Institute.findById(req.body.institute)
        .then(institutee => {
            if (!institutee) {
                return res.status(404).json({ message: "Institute not found" });
            }

            if (institutee.type !== "College") {
                return res.status(400).json({ message: "Institute type must be 'College'" });
            }

            // Continue with college registration
            const { name, university, degree, courses, institute } = req.body;

            // Validate input data
            if (!name || !university || !degree || !courses || !institute)
                return res.status(400).json({ message: "All fields are required" });

            // Create a new college
            const newCollege = {
                name,
                university,
                degree,
                courses,
                institute
            };

            // Save the college to the database
            College.create(newCollege)
                .then(savedCollege => {
                    res.status(201).json({ message: "College registered successfully", college: savedCollege });
                })
                .catch(err => {
                    console.error("Error registering college:", err);
                    res.status(500).json({ message: "Internal server error" });
                });
        })
        .catch(err => {
            console.error("Error finding institute:", err);
            return res.status(500).json({ message: "Internal server error" });
        });

}

export { registerInstitute, schoolRegister, collegeRegister };