import { ButtonTestimonyAdd, ButtonTestimonyBack, DivButtonsTestimony, DivContentTestimony, DivImgTestimony, H4TestimonyIdent, InputContentTestimony } from "./style"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import { api } from "../../services/api";

import axios from "axios";

import imgTestimony from "../../assets/testimony_img.svg"

function EditTestimony() {
    const param = useParams()
    const testimonyIdValue = parseInt(param.testimonyId, 10)


    // ----------- HOOKS -----------
    const [testimonyValue, setTestimonyValue] = useState([]);
    const [testimonyValueOld, setTestimonyValueOld] = useState([]);


    // ----------- NAVIGATE -----------
    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }


    // ----------- EDIÇÃO DO DEPOIMENTO -----------
    const handleSubmit = async () => {
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

    return (
        <>
            <ScreenHeader titlePage={`Editar depoimento`} />
            <DivImgTestimony>
                <img src={imgTestimony} alt="Imagem dos depoimentos" />
            </DivImgTestimony>
            <DivContentTestimony>
                <H4TestimonyIdent>Depoimento</H4TestimonyIdent>
                <InputContentTestimony
                    type="text"
                    placeholder={testimonyValueOld.testimony_content}
                    value={testimonyValue}
                    onChange={(e) => setTestimonyValue(e.target.value)}
                    required />
            </DivContentTestimony>
            <DivButtonsTestimony>
                <ButtonTestimonyBack onClick={goToHomePage}>Voltar</ButtonTestimonyBack>
                <ButtonTestimonyAdd onClick={handleSubmit}>Adicionar</ButtonTestimonyAdd>
            </DivButtonsTestimony>
        </>
    )
}

export default EditTestimony