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

                {title: "", className: "se", searchable: false, render: seDisplay}]; var initLevels = {"agegrps":{"agegrpsA":"18-44 years","agegrpsB":"45-64 years","agegrpsC":"65-74 years","agegrpsD":"75 years and over"},"agegrps_ER":{"agegrps_ERA":"18-34 years","agegrps_ERB":"35-49 years","agegrps_ERC":"50-64 years","agegrps_ERD":"65 years and over"},"disability":{"disabilityA":"With disability","disabilityB":"Without disability"},"education":{"educationA":"Less than high school diploma","educationB":"High school diploma or GED","educationC":"Some college","educationD":"College degree or higher"},"employed":{"employedA":"Employed","employedB":"Not employed","employedC":"Full-Time","employedD":"Part-Time","employedE":"Not currently employed but has worked previously","employedF":"Not currently employed and has never worked"},"family":{"familyA":"Married","familyB":"Widowed","familyC":"Divorced or separated","familyD":"Never married","familyE":"Living with a partner"},"hisprace":{"hispraceB":"Mexican/Mexican American","hispraceF":"Other races, non-Hispanic","hispraceA":"Hispanic","hispraceC":"Non-Hispanic","hispraceD":"Black only, non-Hispanic","hispraceE":"White only, non-Hispanic"},"insurance_Under65":{"insurance_Under65B":"Medicaid or other public","insurance_Under65A":"Private","insurance_Under65C":"Other coverage","insurance_Under65D":"Uninsured"},"metro":{"metroA":"Large central metro","metroB":"Large fringe metro","metroC":"Medium and small metro","metroD":"Nonmetropolitan"},"msa":{"msaA":"Large MSA","msaB":"Small MSA","msaC":"Not in MSA"},"nativity":{"nativityA":"U.S.-born","nativityB":"Foreign-born"},"poverty":{"povertyA":"Less than 100% FPL","povertyB":"100% to less than 200% FPL","povertyC":"200% and greater FPL"},"race":{"raceE":"White only","raceC":"Black only","raceA":"American Indian or Alaska Native only","raceB":"Asian only","raceD":"Native Hawaiian or Other Pacific Islander only","raceG":"Black and White","raceF":"American Indian or Alaska Native and White"},"region":{"regionA":"Northeast","regionB":"Midwest","regionC":"South","regionD":"West"},"sex":{"sexB":"Male","sexA":"Female"},"sogi":{"sogiB":"Gay or Lesbian","sogiC":"Straight","sogiA":"Bisexual"},"svi":{"sviA":"Little to no social vulnerability","sviB":"Low social vulnerability","sviC":"Medium social vulnerability","sviD":"High social vulnerability"},"vet":{"vetA":"Veteran","vetB":"Non-veteran"},"insurance_65over":{"insurance_65overA":"Private","insurance_65overB":"Medicare and Medicaid","insurance_65overC":"Medicare Advantage","insurance_65overD":"Medicare only (no Advantage)","insurance_65overE":"Other coverage","insurance_65overF":"Uninsured"}}; var subLevels = ["Physician office visits","Non-physician office visits","Physician hosp. visits","Non-physician hosp. visits"];
