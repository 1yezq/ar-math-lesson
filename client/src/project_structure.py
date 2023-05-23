import os

def print_directory_structure(start_path, depth=0, output_file=None):
    for entry in os.scandir(start_path):
        print("  " * depth, entry.name, file=output_file)
        if entry.name == "node_modules" or entry.name == 'docs':
            continue
        if entry.is_dir():
            print_directory_structure(entry.path, depth + 1, output_file)

if __name__ == "__main__":
    project_root = os.path.dirname(os.path.abspath(__file__))
    output_filename = "project_structure.txt"

    with open(output_filename, "w") as output_file:
        print_directory_structure(project_root, output_file=output_file)

    print(f"项目结构已输出到文件：{output_filename}")
