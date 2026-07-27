"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SubscribeFormState {
  success?: boolean;
  message?: string;
}

export async function subscribeNewsletter(
  prevState: SubscribeFormState | null,
  formData: FormData
): Promise<SubscribeFormState> {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Por favor ingresa un correo electrónico válido.",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Lácteos Don Guayo Portal <notifications@indevasa.com>",
      to: ["contacto@lacteosdonguayo.com"],
      subject: "¡Nuevo Suscriptor al Newsletter!",
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #015a85; border-radius: 8px; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #015a85; text-transform: uppercase; margin-bottom: 5px; font-size: 20px;">¡Nuevo registro de correo!</h2>
          <p style="color: #666; font-size: 14px; margin-top: 0;">Un usuario ha solicitado unirse al newsletter desde el sitio web.</p>
          
          <div style="background-color: #fffcf0; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #015a85;">
            <span style="font-size: 12px; text-transform: uppercase; color: #015a85; font-weight: bold; display: block; margin-bottom: 2px;">Correo del Suscriptor</span>
            <a href="mailto:${email}" style="font-size: 16px; font-weight: bold; color: #015a85; text-decoration: none;">${email}</a>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 11px; color: #999; text-align: center; margin-bottom: 0;">
            Este es un mensaje automático generado para Lácteos Don Guayo a través de Indeva Websites.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Error enviando el correo a través de Resend:", error);
      return {
        success: false,
        message: "No se pudo completar la suscripción. Intenta de nuevo.",
      };
    }

    return {
      success: true,
      message: "¡Gracias por suscribirte! Te hemos añadido a nuestra lista.",
    };
  } catch (error) {
    console.error("Error inesperado en suscripción:", error);
    return {
      success: false,
      message: "Ocurrió un error inesperado al procesar tu suscripción.",
    };
  }
}
