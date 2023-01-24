import os
import smtplib
import PyPDF2
from email.mime.application import MIMEApplication
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Adicione o endereço de email do remetente e do destinatário
from_address = "seu_email@example.com"
to_address = "destinatario@example.com"

# Adicione o assunto do email
subject = "Envio de arquivos PDF"

# Crie a mensagem do email
message = MIMEMultipart()
message["From"] = from_address
message["To"] = to_address
message["Subject"] = subject

# Iterar por todos os arquivos PDF na pasta
for filename in os.listdir("pasta_com_pdfs"):
    # Verifique se o arquivo é um PDF
    if filename.endswith(".pdf"):
        # Abra o arquivo PDF
        with open(f"pasta_com_pdfs/{filename}", "rb") as f:
            # Crie um objeto PDF
            pdf = PyPDF2.PdfFileReader(f)
            # Obtenha o título do PDF
            title = pdf.getDocumentInfo().title
            # Pergunte ao usuário se deseja enviar o PDF por email
            response = input(f"Deseja enviar o arquivo {title} por email? (s/n) ")
            if response.lower() == "s":
                # Adicione o arquivo PDF como anexo na mensagem de email
                part = MIMEApplication(f.read(), _subtype="pdf")
                part.add_header("Content-Disposition", "attachment", filename=title)
                message.attach(part)

# Conecte-se ao servidor de email
server = smtplib.SMTP("seu_servidor_smtp")
server.starttls()
# Faça login no servidor de email
server.login(from_address, "sua_senha")
# Envie o email
server.sendmail(from_address, to_address, message.as_string())
# Desconecte-se do servidor de email
server.quit()
