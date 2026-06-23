import pypdf

def extract_text_to_file(pdf_path, output_path):
    print(f"Reading PDF: {pdf_path}")
    try:
        reader = pypdf.PdfReader(pdf_path)
        with open(output_path, "w", encoding="utf-8") as out:
            out.write(f"Total Pages: {len(reader.pages)}\n")
            
            for idx, page in enumerate(reader.pages):
                out.write(f"\n--- Page {idx+1} ---\n")
                text = page.extract_text()
                if text:
                    out.write(text + "\n")
                else:
                    out.write("[No text found on this page - might be an image]\n")
        print(f"Successfully saved to {output_path}")
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    extract_text_to_file("/home/rafli/Downloads/Foto Story.pdf", "/home/rafli/Project/aravoice/aravoice-fe/scratch/extracted_full_pdf.txt")
