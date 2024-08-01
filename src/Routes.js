import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCareCenters, 
PetCareCenterTiles, 
PetCareCenterCreate, PetCareCenterEdit, PetCareCenterView
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                                                    <Route path="/" element={<PetCareCenters {...props} title={'Table Layout'} nolistbar={true} />} />
                                            <Route path="PetCareCenters/view/:id" element={<PetCareCenterView {...props} title={'View PetCareCenter'} />} />
                        <Route path="PetCareCenters/edit/:id" element={<PetCareCenterEdit {...props} title={'Edit PetCareCenter'} />} />
                        <Route path="PetCareCenters/create" element={<PetCareCenterCreate {...props} title={'Create PetCareCenter'} />} />

                                                                                                                <Route path="/pcs/tiles" element={<PetCareCenterTiles {...props} title={'Centers'} />} />
                <Route path="/pcs" element={<PetCareCenters {...props} title={'Table Layout'} />} />
                                                                                                        </Routes>
    )

};

export default Component;