import importlib.util
import sys
import types
from pathlib import Path


def load_contract_module():
    sdk = types.ModuleType("genlayer")
    sdk.gl = types.SimpleNamespace(
        Contract=object,
        vm=types.SimpleNamespace(UserError=Exception, Result=object, Return=object),
        public=types.SimpleNamespace(write=lambda fn: fn, view=lambda fn: fn),
    )
    sdk.Address = bytes
    sdk.u256 = int
    class TreeMap:
        def __class_getitem__(cls, args):
            return dict
    sdk.TreeMap = TreeMap
    sdk.allow_storage = lambda cls: cls
    sys.modules["genlayer"] = sdk
    path = Path(__file__).parents[1] / "contracts" / "EvidenceFusionOracle.py"
    spec = importlib.util.spec_from_file_location("evidence_fusion_under_test", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


M = load_contract_module()


def test_yes_requires_all_support():
    assert M._snapshot_state("YES", ["SUPPORT", "SUPPORT"]) == M.VERIFIED
    assert M._snapshot_state("YES", ["REFUTE", "REFUTE"]) == M.UNKNOWN


def test_no_requires_all_refute():
    assert M._snapshot_state("NO", ["REFUTE", "REFUTE"]) == M.VERIFIED
    assert M._snapshot_state("NO", ["SUPPORT", "SUPPORT"]) == M.UNKNOWN


def test_mixed_known_evidence_is_conflicted():
    assert M._snapshot_state("YES", ["SUPPORT", "REFUTE"]) == M.CONFLICTED
    assert M._snapshot_state("NO", ["REFUTE", "SUPPORT"]) == M.CONFLICTED


def test_unknown_or_incomplete_pairs_fail_closed():
    assert M._snapshot_state("UNKNOWN", ["SUPPORT", "SUPPORT"]) == M.UNKNOWN
    assert M._snapshot_state("YES", ["SUPPORT", "UNKNOWN"]) == M.UNKNOWN
    assert M._snapshot_state("NO", []) == M.UNKNOWN
