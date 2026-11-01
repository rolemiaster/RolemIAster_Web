import base64
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(BASE_DIR, "assets", "logo Powered by gemini_512x512.jpg")

if not os.path.exists(file_path):
    print(f"Error: File not found at {file_path}")
    exit(1)

with open(file_path, "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
    # Determine mime type based on extension
    mime_type = "image/jpeg"
    if file_path.lower().endswith(".png"):
        mime_type = "image/png"
    
    result = f"data:{mime_type};base64,{encoded_string}"
    
    output_path = os.path.join(BASE_DIR, "logo_base64.txt")
    with open(output_path, "w") as f:
        f.write(result)
        
    print(f"Base64 string written to {output_path}")
