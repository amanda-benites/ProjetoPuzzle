import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgTestimony from "../../assets/testimony_img.svg"
import { ButtonTestimonyAdd, ButtonTestimonyBack, DivButtonsTestimony, DivContentTestimony, DivImgTestimony, H4TestimonyIdent, InputContentTestimony } from "./style"
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import axios from "axios";

function EditTestimony() {
    const [testimonyValue, setTestimonyValue] = useState([]);
    const [testimonyValueOld, setTestimonyValueOld] = useState([]);
    const param = useParams()
    const testimonyIdValue = parseInt(param.testimonyId, 10)

    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    const fetchLikeStatus = async () => {
        try {
            const formData = {
                testimonyContent: testimonyValue,
                testimonyId: testimonyIdValue
            };
      
            const response = await api.put('/depositions/update', formData);
      
            const testimonyUpdate = response.data;
            navigate(-1)
        } catch (err) {
          console.error(err);
        }
    };

    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/depositions/informations/${testimonyIdValue}`)
            .then(function (response) {
                const informationsTestimony = response.data.data[0];
                setTestimonyValueOld(informationsTestimony);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [testimonyIdValue]);

    return(
        <>
            <ScreenHeader titlePage={`Editar depoimento`}/>
            <DivImgTestimony>
                <img src={imgTestimony} alt="Imagem dos depoimentos"/>
            </DivImgTestimony>
            <DivContentTestimony>
                <H4TestimonyIdent>Depoimento</H4TestimonyIdent>
                <InputContentTestimony 
                    type="text" 
                    placeholder={testimonyValueOld.testimony_content}
                    value={testimonyValue}
                    onChange={(e) => setTestimonyValue(e.target.value)}
                    required/>
            </DivContentTestimony>
            <DivButtonsTestimony>
                <ButtonTestimonyBack onClick={goToHomePage}>Voltar</ButtonTestimonyBack>
                <ButtonTestimonyAdd onClick={fetchLikeStatus}>Adicionar</ButtonTestimonyAdd>
            </DivButtonsTestimony>
        </>
    )
}

export default EditTestimony