import { useState } from "react";
import "./AddNewProduct.css";

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
         alert(
            `✅ Produto salvo com sucesso!\n\n` +
            `🛍️ Produto: ${name}\n💰 Preço: ${price}\n📦 Quantidade: ${quantity}\n📝 Descrição: ${description}\n🏷️ Categoria: ${category}`
        );
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

        
        <h1 className="product-title">Adicionar Produto</h1>

        <form 
            className="product-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleSaveProduct();
                resetForm();
            }}
        >
            <InputField
                id="nameInput"
                label="Nome do Produto"
                placeholder="Digite o nome do produto"
                value={formData.name}
                onChange={(value) => handleChange("name", value)}
            />

            <InputField
                id="priceInput"
                label="Preço"
                placeholder="Digite o preço"
                value={formData.price}
                onChange={(value) => handleChange("price", value)}
            />

            <InputField
                id="quantityInput"
                label="Quantidade"
                type="number"
                placeholder="Digite a quantidade"
                value={formData.quantity}
                onChange={(value) => handleChange("quantity", value)}
            />

            <InputField
                id="descriptionInput"
                label="Descrição"
                placeholder="Digite as descrições do produto"
                value={formData.description}
                onChange={(value) => handleChange("description", value)}
            />

            <InputField
                id="categoryInput"
                label="Categoria"
                type="search"
                placeholder="Digite a categoria"
                value={formData.category}
                onChange={(value) => handleChange("category", value)}
            />

                <button type="submit">Salvar Produto</button>
        </form>

        </>
    )

}

type InputFieldProps = {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
};

function InputField({
    id,
    label,
    placeholder,
    value,
    onChange,
    type = "text"
}: InputFieldProps) {
  return (
    <div className="product-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}