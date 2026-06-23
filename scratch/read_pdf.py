import re

def extract_pdf_text(pdf_path):
    print(f"Reading PDF: {pdf_path}")
    try:
        with open(pdf_path, 'rb') as f:
            content = f.read()
        
        # Find all strings in parentheses inside BT...ET text blocks or raw text streams
        # A simple regex to grab (string) Tj or just text in parentheses
        # We filter out typical PDF operators and short metadata strings.
        strings = re.findall(b'\(([^)]+)\)', content)
        
        print("\n--- Extracted Text Strings ---")
        extracted_lines = []
        for s in strings:
            try:
                decoded = s.decode('utf-8', errors='ignore').strip()
                # Skip font names, resource keys, or single characters
                if len(decoded) > 3 and not decoded.startswith('/') and not decoded.startswith('\\'):
                    # Replace basic PDF escape characters
                    decoded = decoded.replace('\\(', '(').replace('\\)', ')')
                    if decoded not in extracted_lines:
                        extracted_lines.append(decoded)
            except Exception:
                pass
        
        # Print lines
        for i, line in enumerate(extracted_lines):
            print(f"{i+1}: {line}")
            
    except Exception as e:
        print("Error reading PDF:", e)

if __name__ == "__main__":
    extract_pdf_text("/home/rafli/Downloads/Foto Story.pdf")
