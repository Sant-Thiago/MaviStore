import { useState } from "react";
import "./Sales.css";
import { TextInput, SelectInput } from "../../components/inputs/index";

export function Sales() {
    const [formData, setFormData] = useState({
        productName: "",
        quantity: "",
        discount: "",
        paymentMethod: "",
        customerName: "",
        customerId: ""
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value}))
    }

    const handleSaveSale = () => {
        const { productName, quantity, discount, paymentMethod, customerName } = formData;
        
        if (productName == "" || quantity == "" || discount == "" || paymentMethod == "" || customerName == "") {
            alert("Preencha todos os campos!")
            return;
        }

        alert(
            `✅ Venda salva com sucesso!\n\n` +
            `🛍️ Nome do Produto: ${productName}\n📦 Quantidade: ${quantity}\n Desconto: ${discount}\n Método de pagamento: ${paymentMethod}\n Nome do Cliente: ${customerName}`
        );
        
        resetForm();
    }

    const resetForm = () => {
        setFormData({
            productName: "",
            quantity: "",
            discount: "",
            paymentMethod: "",
            customerName: "",
            customerId: ""
        });
    }

    return (
        <>

        
        <h1 className="sale-title">Registrar Vendas</h1>

        <section className="sale-section">

            <form 
                className="sale-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveSale();
                }}
            >
                <div>
                    <SelectInput
                        id="productNameInput"
                        label="Seleção do Produto"
                        placeholder="Selecione o Produto"
                        value={formData.productName}
                        onChange={(value) => handleChange("productName", value)}
                        options={[
                            { value: "anel", label: "Anel" },
                            { value: "brinco", label: "Brinco" },
                            { value: "touca", label: "Touca" },
                            { value: "unhas", label: "Unhas" },
                            { value: "cabelo", label: "Cabelo" },
                        ]}
                    />

                    <TextInput
                        id="quantityInput"
                        label=""
                        type="number"
                        placeholder="Quantidade"
                        value={formData.quantity}
                        onChange={(value) => handleChange("quantity", value)}
                    />
                </div>

                <TextInput
                    id="discountInput"
                    label="Desconto"
                    placeholder="Desconto (%)"
                    type="number"
                    value={formData.discount}
                    onChange={(value) => handleChange("discount", value)}
                />

                <SelectInput
                    id="paymentMethodInput"
                    label="Método de Pagamento"
                    placeholder="Selecione o Método de Pagamento"
                    value={formData.paymentMethod}
                    onChange={(value) => handleChange("paymentMethod", value)}
                    options={[
                        { value: "tecnologia", label: "Tecnologia" },
                        { value: "moda", label: "Moda" },
                        { value: "eletronico", label: "Eletronico" },
                        { value: "lazer", label: "Lazer" },
                        { value: "alimentos", label: "Alimentos" },
                    ]}
                />

                <div>
                    <TextInput
                        id="customerNameInput"
                        label="Informações do Cliente"
                        placeholder="Nome do Cliente"
                        value={formData.customerName}
                        onChange={(value) => handleChange("customerName", value)}
                    />
                    <TextInput
                        id="customerIdInput"
                        label=""
                        type="text"
                        placeholder="Id do Cliente"
                        value={formData.customerId}
                        onChange={(value) => handleChange("customerId", value)}
                    />
                </div>

                <button type="submit">Completar Venda</button>
            </form>
        </section>

        </>
    )

}

