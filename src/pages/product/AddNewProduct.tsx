import { useState } from "react";
import "./AddNewProduct.css";
import { TextInput, SelectInput } from "../../components/inputs/index";

export function AddNewProduct() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: "",
        description: "",
        category: ""
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value}))
    }

    const handleSaveProduct = () => {
        const { name, price, quantity, description, category } = formData;
        if (name == "" || price == "" || quantity == "" || description == "" || category == "") {
            alert("Preencha todos os campos.");
            return;
        }

        alert(
            `✅ Produto salvo com sucesso!\n\n` +
            `🛍️ Produto: ${name}\n💰 Preço: ${price}\n📦 Quantidade: ${quantity}\n📝 Descrição: ${description}\n🏷️ Categoria: ${category}`
        );
        resetForm();
    }

    const resetForm = () => {
        setFormData({
            name: "",
            price: "",
            quantity: "",
            description: "",
            category: ""
        });
    }

    return (
        <>

        
        <h1 className="product-title">Adicionar Produtos</h1>

        <form 
            className="product-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleSaveProduct();
            }}
        >
            <TextInput
                id="nameInput"
                label="Nome do Produto"
                placeholder="Digite o nome do produto"
                value={formData.name}
                onChange={(value) => handleChange("name", value)}
            />

            <TextInput
                id="priceInput"
                label="Preço"
                placeholder="Digite o preço"
                value={formData.price}
                onChange={(value) => handleChange("price", value)}
            />

            <TextInput
                id="quantityInput"
                label="Quantidade"
                type="number"
                placeholder="Digite a quantidade"
                value={formData.quantity}
                onChange={(value) => handleChange("quantity", value)}
            />

            <TextInput
                id="descriptionInput"
                label="Descrição"
                placeholder="Digite as descrições do produto"
                value={formData.description}
                onChange={(value) => handleChange("description", value)}
            />

            <SelectInput
                id="categoryInput"
                label="Categoria"
                placeholder="Selecione a categoria"
                value={formData.category}
                onChange={(value) => handleChange("category", value)}
                options={[
                    { value: "biju-mãos", label: "Para Mãos" },
                    { value: "biju-orelhas", label: "Para Orelhas" },
                    { value: "biju-cabeça", label: "Para Cabeça" },
                ]}
            />

                <button type="submit">Salvar Produto</button>
        </form>

        </>
    )

}
