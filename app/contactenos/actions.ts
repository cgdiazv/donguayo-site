"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
  success?: boolean;
  message?: string;
}

export async function sendContactEmail(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const telefono = (formData.get("telefono") as string) || "No especificado";
  const asunto = (formData.get("asunto") as string) || "Consulta general";
  const mensaje = formData.get("mensaje") as string;

  if (!nombre || !email || !mensaje) {
    return {
      success: false,
      message: "Por favor completa los campos requeridos (Nombre, Correo y Mensaje).",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Lácteos Don Guayo Web <notifications@indevasa.com>",
      to: ["contacto@lacteosdonguayo.com"],
      replyTo: email,
      subject: `[Contacto Web] ${asunto} - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #015a85; padding: 24px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px;">Nuevo Mensaje de Contacto</h1>
            <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Sitio Web Lácteos Don Guayo</p>
          </div>
          
          <div style="padding: 24px; color: #333333;">
            <div style="background-color: #f8fafc; border-left: 4px solid #015a85; padding: 16px; margin-bottom: 20px; border-radius: 6px;">
              <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Cliente:</strong> ${nombre}</p>
              <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Correo electrónico:</strong> <a href="mailto:${email}" style="color: #015a85; text-decoration: none; font-weight: bold;">${email}</a></p>
              <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Teléfono:</strong> ${telefono}</p>
              <p style="margin: 0; font-size: 14px;"><strong>Motivo / Asunto:</strong> ${asunto}</p>
            </div>

            <h3 style="color: #015a85; margin-top: 0; font-size: 15px; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje enviado:</h3>
            <div style="background-color: #fffcf0; padding: 16px; border-radius: 8px; border: 1px solid #f0eaab; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #222222;">
${mensaje}
            </div>
          </div>

          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0;">Puedes responder directamente a este correo para comunicarte con <strong>${nombre}</strong> (${email}).</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Error al enviar con Resend:", error);
      return {
        success: false,
        message: "No se pudo enviar el mensaje en este momento. Intenta de nuevo más tarde.",
      };
    }

    return {
      success: true,
      message: "¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo lo antes posible.",
    };
  } catch (err) {
    console.error("Error inesperado en sendContactEmail:", err);
    return {
      success: false,
      message: "Ocurrió un error inesperado al procesar el envío.",
    };
  }
}
