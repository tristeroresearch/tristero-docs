{
  description = "Tristero Docs - Next.js documentation site";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = ["x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin"];

      perSystem = { system, pkgs, ... }: {
        devShells.default = pkgs.mkShell {
          name = "tristero-docs";

          packages = with pkgs; [
            bun
            typescript-language-server
            nodePackages.prettier
          ];

          shellHook = ''
            echo "Tristero Docs development environment"
            echo "bun: $(bun --version)"
          '';
        };
      };
    };
}
