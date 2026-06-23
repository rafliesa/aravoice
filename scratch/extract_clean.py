import re
import zlib

def extract_pdf_clean(pdf_path):
    print(f"Opening PDF: {pdf_path}")
    try:
        with open(pdf_path, 'rb') as f:
            content = f.read()
        
        # Regex to find streams
        # Stream starts with stream\r?\n and ends with \r?\nendstream
        stream_matches = re.finditer(b'stream\r?\n(.*?)\r?\nendstream', content, re.DOTALL)
        
        extracted_text = []
        for i, match in enumerate(stream_matches):
            stream_data = match.group(1)
            # Try to decompress
            try:
                decompressed = zlib.decompress(stream_data)
                # Find all text strings in parentheses: (string) Tj or similar TJ array
                # PDFs use (Text) Tj or TJ blocks
                matches = re.findall(b'\(([^)]+)\)', decompressed)
                for m in matches:
                    try:
                        text = m.decode('utf-8', errors='ignore').strip()
                        # Filter out very short strings or PDF syntax
                        if len(text) > 3 and not text.startswith('/') and not text.startswith('\\'):
                            # Basic formatting cleanups
                            text = text.replace('\\(', '(').replace('\\)', ')')
                            if text not in extracted_text:
                                extracted_text.append(text)
                    except Exception:
                        pass
            except Exception:
                # Compression might be different or not compressed, try to decode directly
                pass
                
        print("\n--- Extracted Text Content ---")
        for idx, line in enumerate(extracted_text):
            # Print only lines containing letters to filter out pure formatting codes
            if any(c.isalpha() for c in line):
                print(f"{idx+1}: {line}")
                
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    extract_pdf_clean("/home/rafli/Downloads/Foto Story.pdf")
