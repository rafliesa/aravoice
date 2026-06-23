import re
import zlib

def extract_pdf_pages(pdf_path):
    print(f"Reading PDF: {pdf_path}")
    try:
        with open(pdf_path, 'rb') as f:
            content = f.read()
        
        # Find all stream ... endstream blocks
        stream_matches = re.finditer(b'stream\r?\n(.*?)\r?\nendstream', content, re.DOTALL)
        
        page_texts = []
        for idx, match in enumerate(stream_matches):
            stream_data = match.group(1)
            try:
                # Attempt decompression
                decompressed = zlib.decompress(stream_data)
                
                # Check if this looks like a page content stream (contains BT and ET)
                if b'BT' in decompressed and b'ET' in decompressed:
                    # Find all Tj or TJ text blocks
                    # Tj displays a single string: (text) Tj
                    # TJ displays an array of strings/numbers: [(text) 12 (text)] TJ
                    
                    # Regex for (text) Tj
                    tj_matches = re.findall(b'\((.*?)\)\s*Tj', decompressed)
                    for text_bytes in tj_matches:
                        try:
                            text = text_bytes.decode('utf-8', errors='ignore').strip()
                            if len(text) > 1:
                                page_texts.append(text)
                        except Exception:
                            pass
                            
                    # Regex for TJ arrays: \[(.*?)\]\s*TJ
                    tj_array_matches = re.findall(b'\[(.*?)\]\s*TJ', decompressed)
                    for array_bytes in tj_array_matches:
                        # Extract strings from the array: (text)
                        strings_in_array = re.findall(b'\((.*?)\)', array_bytes)
                        for text_bytes in strings_in_array:
                            try:
                                text = text_bytes.decode('utf-8', errors='ignore').strip()
                                if len(text) > 1:
                                    page_texts.append(text)
                            except Exception:
                                pass
            except Exception:
                pass
                
        print("\n--- Clean PDF Page Text ---")
        current_paragraph = []
        for text in page_texts:
            # Skip empty or control strings
            if not text or text.isspace():
                continue
            
            # Remove PDF specific escapes like \( or \) or \\
            clean_text = text.replace('\\(', '(').replace('\\)', ')').replace('\\\\', '\\')
            
            # Simple heuristic to reconstruct sentences:
            # If the text is short and uppercase, it might be a header or label
            # If it's a full sentence, print it.
            if len(clean_text) > 5 or any(c.isalpha() for c in clean_text):
                print(clean_text)
                
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    extract_pdf_pages("/home/rafli/Downloads/Foto Story.pdf")
