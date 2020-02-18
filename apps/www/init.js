var isPivot = false; var initCols = [
                        { title: "Year", className: "sub", "visible": false},
                        { title: "row_var", className: "sub", "visible": false},
                        { title: "rowLevels" , className: "main"},
                        { title: "rowLevNum" , className: "sub", "visible": false},
                        { title: "selected",   className: "sub", "visible" : false},
                        
                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay}]; var initLevels = {"agegrps":{"agegrpsA":"18-44 years","agegrpsB":"45-64 years","agegrpsC":"65-74 years","agegrpsD":"75 and over"},"education":{"educationA":"Less than a high school diploma","educationB":"High school diploma or GED","educationC":"Some college","educationD":"Bachelor's degree or higher"},"employed":{"employedA":"Employed","employedB":"Full-time","employedC":"Part-time","employedD":"Not employed but has worked previously","employedE":"Not employed and has never worked"},"hisprace":{"hispraceA":"Hispanic or Latino","hispraceB":"Mexican or Mexican American","hispraceC":"Not Hispanic or Latino","hispraceD":"Not Hispanic or Latino, white, single race","hispraceE":"Not Hispanic or Latino, Black or African American, single race"},"income":{"incomeA":"Less than $35,000","incomeB":"$35,000 or more","incomeC":"$35,000-$49,999","incomeD":"$50,000-$74,999","incomeE":"$75,000-$99,999","incomeF":"$100,000 or more"},"insurance_65over":{"insurance_65overA":"Private","insurance_65overB":"Medicare and Medicaid","insurance_65overC":"Medicare Advantage","insurance_65overD":"Medicare only","insurance_65overE":"Other coverage","insurance_65overF":"Uninsured"},"insurance_Under65":{"insurance_Under65A":"Private","insurance_Under65B":"Other coverage","insurance_Under65C":"Uninsured","insurance_Under65D":"Medicaid"},"married":{"marriedA":"Married","marriedB":"Widowed","marriedC":"Divorced or separated","marriedD":"Never married","marriedE":"Living with a partner"},"msa":{"msaA":"Large MSA","msaB":"Small MSA","msaC":"Not in MSA"},"poverty":{"povertyA":"Poor","povertyB":"Near poor","povertyC":"Not poor"},"race":{"raceA":"White, single race","raceB":"Black or African American, single race","raceC":"American Indian or Alaska Native, single race","raceD":"Asian, single race","raceE":"Native Hawaiian or Other Pacific Islander, single race","raceF":"Black or African American, white","raceG":"American Indian or Alaska Native, white"},"racesex":{"racesexA":"Hispanic or Latino, male","racesexB":"Hispanic or Latina, female","racesexC":"White, single race, male","racesexD":"White, single race, female","racesexE":"Black or African American, single race, male","racesexF":"Black or African American, single race, female"},"region":{"regionA":"Northeast","regionB":"Midwest","regionC":"South","regionD":"West"},"sex":{"sexA":"Male","sexB":"Female"}}; var subLevels = ["Physician office visits","Non-physician office visits","Physician hosp. visits","Non-physician hosp. visits"];
