import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgTestimony from "../../assets/testimony_img.svg"
import { DivContentTestimony, DivImgTestimony, H4TestimonyIdent } from "./style"
import { useNavigate, useParams } from 'react-router-dom';
import { api } from "../../services/api";
import axios from "axios";
import { useEffect, useState } from "react";

function TestimonyToMe() {
    const param = useParams()
    const testimonyId = parseInt(param.testimonyId, 10)

    // ----------- HOOK -----------
    const [testimonyValues, setTestimonyValues] = useState({});


    // ----------- INFORMAÇÕES DO DEPOIMENTO -----------
    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/depositions/informations/${testimonyId}`)
            .then(function (response) {
                const informationsTestimony = response.data.data[0];
                setTestimonyValues(informationsTestimony);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [testimonyId]);

    return (
        <>
            <ScreenHeader titlePage={testimonyValues ? `Depoimento de ${testimonyValues.user_name}` : 'Carregando...'} />
            <DivImgTestimony>
                <img src={imgTestimony} alt="Imagem dos depoimentos" />
            </DivImgTestimony>
            <DivContentTestimony>
                <H4TestimonyIdent>Depoimento</H4TestimonyIdent>
                <p>{testimonyValues ? testimonyValues.testimony_content : 'Carregando...'}</p>
            </DivContentTestimony>
        </>
    )
}

export default TestimonyToMe